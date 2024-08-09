namespace Infrastructure.Repositories;
using Dapper;
using Domain.Entities;
using Domain.RepositoryInterfaces;
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
        var sql = "SELECT * FROM jobs";
        return (await connection.QueryAsync<Job>(sql)).ToList();
    }

    public async Task<bool> Update(Job job)
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "UPDATE jobs SET title = @Title, description = @Description, location = @Location," + 
        "department = @Department, activestatus = @ActiveStatus, AttitudeAndDiscipline = @AttitudeAndDiscipline," +
        "TechnicalKnowledge = @TechnicalKnowledge, EducationBackground = @EducationBackground," +
        "ProfessionalQualification = @ProfessionalQualification, CareerBackground = @CareerBackground," +
        "CommunicationSkills = @CommunicationSkills, CulturalFit = @CulturalFit, FamilyBackground = @FamilyBackground," +
        "IQCreativityProblemSolvingSkills = @IQCreativityProblemSolvingSkills, ManagementSkills = @ManagementSkills " +
        "WHERE id = @Id";
        return await connection.ExecuteAsync(sql, job) > 0;
    }
}