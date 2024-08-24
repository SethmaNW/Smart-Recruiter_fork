using Dapper;
using Dapper.Contrib.Extensions;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;
using System.Data;
using System.Linq;

namespace Infrastructure.Repositories;
public class CandidateRepository : ICandidateRepository
{
    private DBContext _dbContext;
    public CandidateRepository(DBContext dbContext)
    {
        _dbContext = dbContext;
    }

    // get all candidate details
    public async Task<IEnumerable<Candidate>> GetAll()
    {
        using var connection = _dbContext.GetOpenConnection();
         
        var candidates = await connection.QueryAsync<Candidate>("SELECT * FROM Candidates");
        return candidates.ToList();
    }

    // get applicant page details from jobId
    public async Task<IEnumerable<CandidateWithComment>> GetApplicantsFromJobId(int jobId)
    {
        using var connection = _dbContext.GetOpenConnection();

        var sql = "EXEC dbo.getApplicantsFromJobId @jobId";

        var candidates = await connection.QueryAsync<CandidateWithComment>(sql, new { jobId });

        return candidates.ToList();
    }

    // save candidate details
    public async Task<Candidate> Save(Candidate candidate, int jobId)
    {
        using var connection = _dbContext.GetOpenConnection();

        int roleId = 0; // when candidate apply for a job, its' role is applicant so roleId is 1

        var parameters = new DynamicParameters();
        parameters.Add("@Name", candidate.Name);
        parameters.Add("@Contact", candidate.Contact);
        parameters.Add("@Email", candidate.Email);
        parameters.Add("@CV_FilePath", candidate.CV_FilePath);
        parameters.Add("@CV_FileName", candidate.CV_FileName);
        parameters.Add("@Skills", candidate.Skills);
        parameters.Add("@Available_Date", candidate.Available_Date);
        parameters.Add("@GitHub_Link", candidate.GitHub_Link);
        parameters.Add("@LinkedIn", candidate.LinkedIn);
        parameters.Add("@Degree", candidate.Degree);
        parameters.Add("@University", candidate.University);
        parameters.Add("@Reason", candidate.Reason);
        parameters.Add("@Experience", candidate.Experience);
        parameters.Add("@Role_Id", roleId);
        parameters.Add("@jobId", jobId);
        parameters.Add("@Id", dbType: DbType.Int32, direction: ParameterDirection.Output);

        await connection.ExecuteAsync("SaveCandidate", parameters, commandType: CommandType.StoredProcedure);

        candidate.Id = parameters.Get<int>("@Id");
        return candidate;
    }

    // update roleId by candidateId
    public async Task<bool> UpdateRoleId(int candidateId, int newRoleId)
    {
        try
        {
            using var connection = _dbContext.GetOpenConnection();
            var sql = "EXEC UpdateRoleId @newRoleId, @candidateId";
            var rowsAffected = await connection.ExecuteAsync(sql, new { candidateId, newRoleId });
            return rowsAffected>0;
        }
        catch (Exception ex) {
            Console.WriteLine($"Error updating RoleId: {ex.Message}");
            return false;
        }
    }

    // delete a candidate by candidateId
    public async Task<bool> DeleteCandidate(int candidateId)
    {
        try
        {
            using var connection = _dbContext.GetOpenConnection();
            var sql = "EXEC DeleteCandidate @candidateId";
            var rowsAffected = await connection.ExecuteAsync(sql, new { candidateId });
            return rowsAffected > 0;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleing candidate: {ex.Message}");
            return false;
        }
    }

    // get shortlisted candidates using jobId
    public async Task<IEnumerable<Candidate>> GetShortlistFromJobId(int jobId)
    {
        try
        {
            using var connection = _dbContext.GetOpenConnection();
            var shortlist = "EXEC GetShortlistFromJobId @jobId";
            return await connection.QueryAsync<Candidate>(shortlist, new { jobId });
        }
        catch (Exception ex) {
            Console.WriteLine($"Error getting shortlisted candidates: {ex.Message}");
            return Enumerable.Empty<Candidate>();
        }
    }

    public async Task<Candidate> GetCandidateById(int candidateId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = "GetCandidateById";
        var result = await connection.QueryFirstOrDefaultAsync<Candidate>(
            sql, 
            new { candidateId }, 
            commandType: CommandType.StoredProcedure
        );

        if (result == null)
        {
            throw new KeyNotFoundException($"Candidate with ID {candidateId} not found.");
        }

        return result;
    }

    // get number of applicants for dashboard
    public async Task<int> GetNoOfApplicnats(int jobId, int roleId)
    {
        try
        {
            using var connection = _dbContext.GetOpenConnection();
            var sql = "EXEC GetNoOfApplicnats @jobId, @roleId";
            var count = await connection.QuerySingleOrDefaultAsync<int>(sql, new { jobId, roleId });
            return count;
        }
        catch (Exception ex) {
            Console.WriteLine($"Error getting number of candidates: {ex.Message}");
            return 0;
        }
    }

}