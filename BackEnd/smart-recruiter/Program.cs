using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;
using Infrastructure.Repositories;
using ServiceInterfaces.IServices;
using services.ServiceImplementations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var Services = builder.Services;

// Add CORS services
Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

Services.AddControllers();  // Register the controllers

// Register Classes for dependency injection
//Add siglton instace for creating the connection to the database
Services.AddSingleton<DBContext>();
Services.AddScoped<ICandidateRepository, CandidateRepository>();
Services.AddScoped<ICandidateService, CandidateService>();
Services.AddScoped<IJobRepository, JobRepository>();
Services.AddScoped<IJobService, JobService>();


var app = builder.Build();

// Use the CORS policy
app.UseCors("AllowAllOrigins");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();  // Map incomming requests to the registered controllers
app.Run();

