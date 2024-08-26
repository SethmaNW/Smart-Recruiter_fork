namespace Infrastructure.Repositories;

using System.Data;
using Dapper;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using DTO.DTOs;
using Infrastructure.DBConnection;

public class MarkRepository : IMarkRepository

{
    private readonly DBContext _dbConnection;

    public MarkRepository(DBContext dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<bool> SaveMark(Mark mark)
    {
        try
    {
        using IDbConnection dbConnection = _dbConnection.GetOpenConnection();
        var parameters = new DynamicParameters();
        parameters.Add("@AttitudeAndDiscipline", mark.AttitudeAndDiscipline);
        parameters.Add("@TechnicalKnowledge", mark.TechnicalKnowledge);
        parameters.Add("@EducationBackground", mark.EducationBackground);
        parameters.Add("@ProfessionalQualification", mark.ProfessionalQualification);
        parameters.Add("@CareerBackground", mark.CareerBackground);
        parameters.Add("@CommunicationSkills", mark.CommunicationSkills);
        parameters.Add("@CulturalFit", mark.CulturalFit);
        parameters.Add("@FamilyBackground", mark.FamilyBackground);
        parameters.Add("@IQCreativityProblemSolvingSkills", mark.IQCreativityProblemSolvingSkills);
        parameters.Add("@ManagementSkills", mark.ManagementSkills);
        parameters.Add("@AdminId", mark.AdminId);
        parameters.Add("@JobId", mark.JobId);
        parameters.Add("@CandidateId", mark.CandidateId);
        parameters.Add("@RoleId", mark.RoleId);

        await dbConnection.ExecuteAsync("SaveMarks", parameters, commandType: CommandType.StoredProcedure);
        return true;
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return false;
    }
    }
}