
using System.Net;
using Newtonsoft.Json;

public class ExceptionHandlingMiddleware
{
    private const string JsonContentType = "application/json";
    private readonly RequestDelegate _next;
    private readonly IWebHostEnvironment _env;

    public ExceptionHandlingMiddleware(RequestDelegate next, IWebHostEnvironment env)
    {
        _next = next;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex, _env);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception exception, IWebHostEnvironment env)
    {
        context.Response.ContentType = JsonContentType;
        if (exception is ApiException ex)
        {
            // handle explicit 'known' API errors
            //context.Exception = null;
            context.Response.StatusCode = ex.StatusCode;

            string jsonString = JsonConvert.SerializeObject(new ApiError(Message: ex.Message, Errors: ex.Errors, IsError: true));
            return context.Response.WriteAsync(jsonString);
        }
        else if (exception is UnauthorizedAccessException)
        {
            context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            string jsonString = JsonConvert.SerializeObject(new ApiError(Message: "ApiError.Unauthorized"));
            return context.Response.WriteAsync(jsonString);
        }
        else
        {
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var apiError = TranslateException(exception);

            if (env.IsDevelopment())
            {
                string jsonString = JsonConvert.SerializeObject(apiError ?? new ApiError(Message: exception.GetBaseException().Message, Details: exception.StackTrace));
                return context.Response.WriteAsync(jsonString);
            }
            else
            {
                string jsonString = JsonConvert.SerializeObject(apiError ?? new ApiError(Message: "ApiError.UnknownError"));
                return context.Response.WriteAsync(jsonString);
            }
        }
    }

    private static ApiError? TranslateException(Exception exception)
    {
        //if (exception is DbUpdateConcurrencyException)
        //{
        //    return new ApiError(Message: "ApiError.ConcurrencyError"));
        //}

        //if (exception is DbUpdateException)
        //{
        //    if (exception.InnerException != null && exception.InnerException.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
        //    {
        //        return new ApiError(Message: "ApiError.DeleteConflictedError");
        //    }
        //}

        if (!string.IsNullOrEmpty(exception.Message) &&
            exception.Message.Contains("Value cannot be null.") &&
            exception.Message.Contains("Parameter name: entity"))
        {
            return new ApiError(Message: "ApiError.EntityNull");
        }

        return null;
    }
}
