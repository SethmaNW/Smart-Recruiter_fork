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

    public async Task<MarkOutputDTO> GetMarks(int candidateId, int jobId, int roleId)
    {
        try
        {
            using IDbConnection dbConnection = _dbConnection.GetOpenConnection();
            var parameters = new DynamicParameters();
            //input parmeter
            parameters.Add("@CandidateId", candidateId);
            parameters.Add("@JobId", jobId);
            parameters.Add("@RoleId", roleId);

            //output parameter
            parameters.Add("@FinalScore", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@TotalMark", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@AttitudeAndDisciplineParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@TechnicalKnowledgeParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@EducationBackgroundParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@ProfessionalQualificationParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@CareerBackgroundParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@CommunicationSkillsParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@CulturalFitParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@FamilyBackgroundParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@IQCreativityProblemSolvingSkillsParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
            parameters.Add("@ManagementSkillsParticipation", dbType: DbType.Decimal, direction: ParameterDirection.Output, precision: 18, scale: 5);
    
            // Execute the stored procedure
            await dbConnection.ExecuteAsync("CalculateMarks", parameters, commandType: CommandType.StoredProcedure);

            // Map output parameters to DTO
            var result = new MarkOutputDTO
            {
                FinalScore = parameters.Get<decimal>("@FinalScore"),
                TotalMark = parameters.Get<decimal>("@TotalMark"),
                AttitudeAndDisciplineParticipation = parameters.Get<decimal>("@AttitudeAndDisciplineParticipation"),
                TechnicalKnowledgeParticipation = parameters.Get<decimal>("@TechnicalKnowledgeParticipation"),
                EducationBackgroundParticipation = parameters.Get<decimal>("@EducationBackgroundParticipation"),
                ProfessionalQualificationParticipation = parameters.Get<decimal>("@ProfessionalQualificationParticipation"),
                CareerBackgroundParticipation = parameters.Get<decimal>("@CareerBackgroundParticipation"),
                CommunicationSkillsParticipation = parameters.Get<decimal>("@CommunicationSkillsParticipation"),
                CulturalFitParticipation = parameters.Get<decimal>("@CulturalFitParticipation"),
                FamilyBackgroundParticipation = parameters.Get<decimal>("@FamilyBackgroundParticipation"),
                IQCreativityProblemSolvingSkillsParticipation = parameters.Get<decimal>("@IQCreativityProblemSolvingSkillsParticipation"),
                ManagementSkillsParticipation = parameters.Get<decimal>("@ManagementSkillsParticipation")
            };
            return result;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return new MarkOutputDTO(); // Add this line to return a default value in case of an exception.
        }
    }
}