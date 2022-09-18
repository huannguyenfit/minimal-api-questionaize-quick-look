record struct LoginViewModel(string username, string password);
record struct QuestionViewModel(int Id, string? Title, string? SubTitle,
    TypeInputEnum? TypeInputId, string? Value, string Anwser, string YourAnwser, int NumberOfTimesSelected);
record struct AssessmentViewModel(int Id, string Title, string Description, string? Result, List<QuestionViewModel> Questions);


public static class WebApiExtension
{

    public static void AddActionApi(this WebApplication app)
    {

        var db = new DataStore(@"Resources/data.json", false);
        var currentEmployee = db.GetCollection<Employee>("Employee").AsQueryable().AsQueryable().First();

        //fake user identity from Claims

        app.MapGet("/api/users/getall", async () =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            return Results.Ok(await Task.FromResult(store.GetCollection("User").AsQueryable()));
        }).WithTags("User"); ;

        app.MapGet("/api/employees/getall", async () =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            return Results.Ok(await Task.FromResult(store.GetCollection("Employee").AsQueryable()));
        }).WithTags("Employee");
        #region Questionaire


        app.MapGet("/api/questions/getall", async (int skip, int take) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var data = store.GetCollection("Question").AsQueryable().OrderByDescending(o => o.Id);
            var results = data.Skip(skip).Take(take).ToList();
            return Results.Ok(await Task.FromResult(new
            {
                results,
                total = data.Count()
            }));

        }).WithTags("Questions");

        app.MapPost("/api/questions", async (QuestionViewModel viewModel) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var collection = store.GetCollection("Question");
            var questionId = collection.GetNextIdValue();

            //map viewModel to entity
            var question = new Question()
            {
                Title = viewModel.Title,
                NumberOfTimesSelected = 0,
                SubTitle = viewModel.SubTitle,
                TypeInputId = viewModel.TypeInputId,
                Value = viewModel.Value,
                Id = questionId == 0 ? 1 : questionId,
                Anwser = viewModel.Anwser
            };

            //save
            await collection.InsertOneAsync(question);

            return Results.Ok(await Task.FromResult(question));
        }).WithTags("Questions");
        #endregion

        #region Assessments
        app.MapGet("/api/assessments/getall", async (int skip, int take) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var data = store.GetCollection("Assessments").AsQueryable().OrderByDescending(o => o.Id);
            var results = data.Skip(skip).Take(take).ToList();
            return Results.Ok(await Task.FromResult(new
            {
                results,
                total = data.Count()
            }));
        }).WithTags("Assessments");


        app.MapPost("/api/assessments", async (AssessmentViewModel viewModel) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var assessmentCollection = store.GetCollection("Assessments");

            //map
            var assessment = new Assessment()
            {
                Title = viewModel.Title,
                Description = viewModel.Description
            };

            var assessmentId = assessmentCollection.GetNextIdValue();
            assessment.Id = assessmentId == 0 ? 1 : assessmentId;

            var assessmentQuestionCollection = store.GetCollection("AssessmentQuestion");
            var questionCollection = store.GetCollection("Question");

            List<AssessmentQuestion> assessmentQuestions = new List<AssessmentQuestion>();
            foreach (var question in viewModel.Questions)
            {
                assessmentQuestions.Add(new AssessmentQuestion()
                {
                    AssessmentId = assessment.Id,
                    SubTitle = question.SubTitle,
                    Title = question.Title,
                    TypeInputId = question.TypeInputId ?? TypeInputEnum.SingleSelection,
                    Value = question.Value,
                    Id = questionCollection.GetNextIdValue(),
                    Anwser = question.Anwser
                });
            }

            //update number of selected ++
            var updateQuestionTasks = new List<Task<bool>>();
            foreach (var question in viewModel.Questions)
            {
                updateQuestionTasks.Add(questionCollection.UpdateOneAsync(e => e.Id == question.Id,
                    new { NumberOfTimesSelected = question.NumberOfTimesSelected + 1 }));
            }
            //save
            await Task.WhenAll(
                Task.WhenAll(updateQuestionTasks),
                assessmentCollection.InsertOneAsync(assessment),
                assessmentQuestionCollection.InsertManyAsync(assessmentQuestions)
           );

            return Results.Ok(true);
        }).WithTags("Assessments");

        app.MapPost("/api/assessments-random/{numberOfQuestion}", async (int numberOfQuestion, AssessmentViewModel viewModel) =>
        {
            if (numberOfQuestion == 0) return Results.BadRequest();
            var store = new DataStore(@"Resources/data.json", false);
            var assessmentCollection = store.GetCollection("Assessments");
            var questionCollection = store.GetCollection<Question>("Question");

            if (numberOfQuestion > questionCollection.Count) throw new ApiException("The number of questions in the system is not enough");

            //get new question < 10 (number of times selected)
            var newQuestionRandom = questionCollection.AsQueryable().Where(o => o.NumberOfTimesSelected <= 10)
                                    .OrderBy(arg => Guid.NewGuid()).Take(numberOfQuestion).ToList();
            List<Question> questionRemain = new List<Question>();

            if (newQuestionRandom.Count < numberOfQuestion)
            {
                //get question remain
                var numberOfQuestionRemain = numberOfQuestion - newQuestionRandom.Count;
                questionRemain = questionCollection.AsQueryable().Where(o => o.NumberOfTimesSelected > 10)
                                        .OrderBy(arg => Guid.NewGuid()).Take(numberOfQuestionRemain).ToList();
            }

            var totalQuestionsSelectedAfterRandoms = newQuestionRandom.Concat(questionRemain);

            //map
            var assessment = new Assessment()
            {
                Title = viewModel.Title,
                Description = viewModel.Description
            };
            var assessmentId = assessmentCollection.GetNextIdValue();
            assessment.Id = assessmentId == 0 ? 1 : assessmentId;
            var asssessmentQuestionCollection = store.GetCollection("AssessmentQuestion");

            List<AssessmentQuestion> questions = new List<AssessmentQuestion>();
            foreach (var question in totalQuestionsSelectedAfterRandoms)
            {
                questions.Add(new AssessmentQuestion()
                {
                    AssessmentId = assessment.Id,
                    SubTitle = question.SubTitle,
                    Title = question.Title,
                    TypeInputId = question.TypeInputId ?? TypeInputEnum.SingleSelection,
                    Value = question.Value,
                    Anwser = question.Anwser
                });
            }

            //update number of selected ++
            var updateQuestionTasks = new List<Task<bool>>();
            foreach (var question in totalQuestionsSelectedAfterRandoms)
            {
                updateQuestionTasks.Add(questionCollection.UpdateOneAsync(e => e.Id == question.Id,
                    new { NumberOfTimesSelected = question.NumberOfTimesSelected + 1 }));
            }
            //save
            await Task.WhenAll(
                Task.WhenAll(updateQuestionTasks),
                assessmentCollection.InsertOneAsync(assessment),
                asssessmentQuestionCollection.InsertManyAsync(questions)
            );


            return Results.Ok(true);
        }).WithTags("Assessments");

        #endregion

        #region EmployeeAssessments

        app.MapGet("/api/employee-assessments/getall", async (int skip, int take) =>
        {
            var store = new DataStore(@"Resources/data.json", false);

            var data = store.GetCollection("EmployeeAssessment").AsQueryable().OrderByDescending(o => o.Id);
            var results = data.Skip(skip).Take(take).ToList();
            return Results.Ok(await Task.FromResult(new
            {
                results,
                total = data.Count()
            }));

        }).WithTags("EmployeeAssessments");

        app.MapGet("/api/employee-assessments/get-an-assessment", async (int assessmentId) =>
        {
            var store = new DataStore(@"Resources/data.json", false);

            var employeeAssessmentCollection = store.GetCollection<EmployeeAssessment>("EmployeeAssessment");
            var questionsCollection = store.GetCollection<EmployeeAssessmentQuestion>("EmployeeAssessmentQuestion");

            var assessment = employeeAssessmentCollection.AsQueryable().FirstOrDefault(o => o.Id == assessmentId);

            var questions = questionsCollection.AsQueryable().Where(o => o.EmployeeAssessmentId == assessmentId);

            if (assessment == null && !questions.Any()) 
                throw new ApiException("Your assessment does not exists.");


            //map entity to viewModel
            var viewModel = new AssessmentViewModel()
            {
                Id = assessment.Id,
                Description = assessment.Description ?? "",
                Title = assessment?.Title ?? "",
                Result = assessment.Result
            };
            viewModel.Questions = new List<QuestionViewModel>();
            foreach (var question in questions)
            {
                viewModel.Questions.Add(new QuestionViewModel()
                {
                    Id = question.Id,
                    SubTitle = question.SubTitle,
                    Title = question.Title,
                    Value = question.Value,
                    TypeInputId = question.TypeInputId,
                });
            }
            return Results.Ok(await Task.FromResult(viewModel));
        }).WithTags("EmployeeAssessments");



        app.MapPost("/api/employee-assessments/ready-to-start", async (int assessmentId) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var employeeCollection = store.GetCollection<Employee>("Employee");



            var assessmentCollection = store.GetCollection<Assessment>("Assessments");
            var assessment = assessmentCollection.AsQueryable().FirstOrDefault(o => o.Id == assessmentId);

            if (currentEmployee == null || assessment == null) return Results.BadRequest();


            //map
            var employeeAssessmentCollection = store.GetCollection("EmployeeAssessment");
            var assessmentQuestionCollection = store.GetCollection<AssessmentQuestion>("AssessmentQuestion");
            var employeeAssessmentQuestionCollection = store.GetCollection("EmployeeAssessmentQuestion");

            var employeeAssessmentId = employeeAssessmentCollection.GetNextIdValue();
            var entity = new EmployeeAssessment()
            {
                Id = employeeAssessmentId == 0 ? 1 : employeeAssessmentId,
                Title = assessment?.Title,
                Description = assessment?.Description,
                EmployeeId = currentEmployee.Id,
                StatusId = 1

            };
            var assessmentQuestions = assessmentQuestionCollection.AsQueryable().Where(o => o.AssessmentId == assessmentId);
            List<EmployeeAssessmentQuestion> employeeQuestions = new List<EmployeeAssessmentQuestion>();
            foreach (var question in assessmentQuestions)
            {
                employeeQuestions.Add(new EmployeeAssessmentQuestion()
                {
                    SubTitle = question?.SubTitle,
                    Title = question?.Title,
                    TypeInputId = question?.TypeInputId,
                    Value = question?.Value,
                    EmployeeAssessmentId = entity.Id,
                    Anwser = question.Anwser
                });
            }

            await Task.WhenAll(
                employeeAssessmentCollection.InsertOneAsync(entity),
                employeeAssessmentQuestionCollection.InsertManyAsync(employeeQuestions)
                 );
            return Results.Ok(entity);

        }).WithTags("EmployeeAssessments");



        app.MapPost("/api/employee-assessments/save-assessment", async (int employeeAssessmentId, AssessmentViewModel viewModel) =>
        {
            var store = new DataStore(@"Resources/data.json", false);
            var employeeCollection = store.GetCollection<Employee>("Employee");
            var employeeAssessmentCollection = store.GetCollection("EmployeeAssessment");

            var employeeAssessmentQuestionCollection = store.GetCollection("EmployeeAssessmentQuestion");

            var currentEmployAssessment = employeeAssessmentCollection.AsQueryable().FirstOrDefault(o => o.Id == employeeAssessmentId);
            var employeeAssessmentQuestions = employeeAssessmentQuestionCollection.AsQueryable().Where(o => o.EmployeeAssessmentId == employeeAssessmentId);

            if (currentEmployee == null || currentEmployAssessment == null || !employeeAssessmentQuestions.Any()) return Results.BadRequest();

            var totalQuestionAnwserCorrect = 0;
            //map viewmodel To entity


            var updateQuestionTasks = new List<Task<bool>>();
            foreach (var question in viewModel.Questions)
            {
                var employeeAssessmentQuestion = employeeAssessmentQuestions.FirstOrDefault(o => o.Id == question.Id);
                if (employeeAssessmentCollection == null) continue;
                var validAnwsers = employeeAssessmentQuestion?.Anwser?.Split(',');
                var yourAnwsers = question.YourAnwser.Split(',');

                var optionValidAnwser = 0;
                foreach (var validKeyId in validAnwsers)
                {
                    if (validAnwsers != null && !yourAnwsers.Any(keyId => keyId == validKeyId))
                        continue;
                    optionValidAnwser++;
                }

                if (optionValidAnwser == validAnwsers?.Length)
                {
                    totalQuestionAnwserCorrect++;
                }

                updateQuestionTasks.Add(employeeAssessmentQuestionCollection.UpdateOneAsync(question.Id,
                    new { YourAnwser = question.YourAnwser }));
            }
            currentEmployAssessment.Result = $"{totalQuestionAnwserCorrect}/{employeeAssessmentQuestions.Count()}";

            await Task.WhenAll(
                employeeAssessmentCollection.UpdateOneAsync(employeeAssessmentId, new { Result = currentEmployAssessment.Result }),
                Task.WhenAll(updateQuestionTasks)

                );

            return Results.Ok(totalQuestionAnwserCorrect);

        }).WithTags("EmployeeAssessments");

        #endregion



    }
}

