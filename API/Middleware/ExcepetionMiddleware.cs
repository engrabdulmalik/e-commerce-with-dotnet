using System;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware;

public class ExcepetionMiddleware(IHostEnvironment env,ILogger<ExcepetionMiddleware> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
           await HandleException(context, ex);    
        }
    }

    private async Task HandleException(HttpContext context, Exception ex)
    {
        logger.LogError(ex, ex.Message);
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        var response = new ProblemDetails
        {
            Status = 500,
            Title = ex.Message,
            Detail = env.IsDevelopment() ? ex.StackTrace?.ToString() : null
        };
       var options = new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
       var json = JsonSerializer.Serialize(response, options);
       await context.Response.WriteAsync(json);
    }
}
