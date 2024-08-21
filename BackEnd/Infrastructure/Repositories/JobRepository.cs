namespace Infrastructure.Repositories;

using System.Data;
using Dapper;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using DTO.DTOs;
using Infrastructure.DBConnection;

public class JobRepository : IJobRepository
{
    private readonly DBContext _dbConnection;

    public JobRepository(DBContext dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<IEnumerable<Job>> GetAll()
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "EXEC GetAllJobs";
        return (await connection.QueryAsync<Job>(sql)).ToList();
    }

    public async Task<IEnumerable<Job>> GetActiveJobs()
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "EXEC GetActiveJobs";
        return (await connection.QueryAsync<Job>(sql)).ToList();
    }

    public async Task<Job> GetJobDescriptionByJobId(int jobId)
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "EXEC GetJobDescriptionByJobId @jobId";
        var result = await connection.QuerySingleOrDefaultAsync<Job>(sql, new { jobId });
        
        if (result == null)
        {
            throw new Exception($"Job description not found for jobId: {jobId}");
        }
        
        return result;
    }
    public async Task<Job> Save(Job job){
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "EXEC SaveJob @Title, @Description, @NoOfAvailablePositions, @Location, @Department, @ActiveStatus, " +
              "@AttitudeAndDiscipline, @TechnicalKnowledge, @EducationBackground, @ProfessionalQualification, " +
              "@CareerBackground, @CommunicationSkills, @CulturalFit, @FamilyBackground, @IQCreativityProblemSolvingSkills, " +
              "@ManagementSkills";

        var id = (await connection.QueryAsync<int>(sql, job)).FirstOrDefault();
        job.Id = id;
        return job;
    }

    public async Task<bool> Update(Job job)
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "[dbo].[UpdateJob]";
        var parameters = new
        {
            job.Id,
            job.Title,
            job.Description,
            job.NoOfAvailablePositions,
            job.Location,
            job.Department,
            job.ActiveStatus,
            job.AttitudeAndDiscipline,
            job.TechnicalKnowledge,
            job.EducationBackground,
            job.ProfessionalQualification,
            job.CareerBackground,
            job.CommunicationSkills,
            job.CulturalFit,
            job.FamilyBackground,
            job.IQCreativityProblemSolvingSkills,
            job.ManagementSkills
        };
        return await connection.ExecuteAsync(sql, parameters, commandType: CommandType.StoredProcedure) > 0;
    }

    // get job position from jobId
    public async Task<IEnumerable<string>> GetJobPosition(int jobId)
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "SELECT Title FROM jobs WHERE Id = @jobId";
        var position = await connection.QueryAsync<string>(sql, new { jobId });
        return position;
    }
}