
class BaseEntity
{
    public int Id { get; set; }
}

class User : BaseEntity
{
    public string? UserName { get; set; }
    public string? Password { get; set; }
    public string? Email { get; set; }
    public string? FullName { get; set; }
    public string? Phone { get; set; }
    public int NumberOfTimesSelected { get; set; }
}
class Employee : BaseEntity
{
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public int NumberOfTimesSelected { get; set; }
}

class Question : BaseEntity
{
    public string? Title { get; set; }
    public string? SubTitle { get; set; }
    public TypeInputEnum? TypeInputId { get; set; }
    public int NumberOfTimesSelected { get; set; }
    public string? Value { get; set; }
    public string? Anwser { get; set; }

}



class Assessment : BaseEntity
{
    public string? Title { get; set; }
    public string? Description { get; set; }
}

class AssessmentQuestion : BaseEntity
{
    public int AssessmentId { get; set; }
    public string? Title { get; set; }
    public string? SubTitle { get; set; }
    public TypeInputEnum? TypeInputId { get; set; }
    public string? Value { get; set; }
    public string? Anwser { get; set; }
}


class EmployeeAssessment : BaseEntity
{
    public int EmployeeId { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Result { get; set; }
    public int? StatusId { get; set; }
}


class EmployeeAssessmentQuestion : BaseEntity
{
    public int EmployeeAssessmentId { get; set; }
    public string? Title { get; set; }
    public string? SubTitle { get; set; }
    public TypeInputEnum? TypeInputId { get; set; }
    public string? Value { get; set; }
    public string? YourAnwser { get; set; }
    public string? Anwser { get; set; }


}

enum TypeInputEnum
{
    SingleSelection = 1,
    MultipleSelection
}
