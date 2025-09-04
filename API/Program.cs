using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
    });
});
builder.Services.AddTransient<ExcepetionMiddleware>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseMiddleware<ExcepetionMiddleware>();
app.UseCors("CorsPolicy");
app.MapControllers();
DbInitializer.InitDb(app);

app.Run();
