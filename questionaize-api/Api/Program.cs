

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigureAutoMapper();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.Configure<ApiBehaviorOptions>(options =>
 {
     options.InvalidModelStateResponseFactory = (context) => throw new ValidationApiException(context.ModelState);
 });
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            );
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
app.UseMiddleware<ExceptionHandlingMiddleware>();
app.AddActionApi();

app.Run();
