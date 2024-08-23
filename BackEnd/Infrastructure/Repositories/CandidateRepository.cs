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
    public async Task<Candidate> Save(Candidate candidate)
    {
        using var connection = _dbContext.GetOpenConnection();

        if (candidate.Id == 0)
        {   
            
            var sql = @"
                INSERT INTO Candidates (Name, Contact, Email, CV_FilePath, CV_FileName, Skills, Available_Date, GitHub_Link, LinkedIn, Degree, University, Reason, Experience, Role_Id) 
                VALUES (@Name, @Contact, @Email, @CV_FilePath, @CV_FileName, @Skills, @Available_Date, @GitHub_Link, @LinkedIn, @Degree, @University, @Reason, @Experience, @Role_Id); 
                SELECT CAST(SCOPE_IDENTITY() as int)";

            var id = connection.Query<int>(sql, candidate).Single();

            candidate.Id = id;
            return candidate;
        
        }
        else
        {
            await connection.UpdateAsync(candidate);
        }

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