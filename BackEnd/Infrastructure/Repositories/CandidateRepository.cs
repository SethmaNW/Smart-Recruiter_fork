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

        var sql = @"
        SELECT 
            c.[Id], c.[Name], c.[Contact], c.[CV_FilePath], 
            c.[CV_FileName], c.[Skills], c.[Available_Date], 
            c.[Degree], c.[Experience], c.[Reason], c.[Role_Id], com.[Comment] 
        FROM [dbo].[candidates] c
        INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id]
        LEFT JOIN [dbo].[comments] com ON c.[Id] = com.[CandidateId] AND com.[jobId] = @jobId
        WHERE cj.[JobId] = @jobId AND c.[Role_Id] IN (0, 7)";
        //var sql = "EXEC dbo.getApplicantsFromJobId @jobId";

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
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"
                   UPDATE [dbo].[candidates]
                   SET [role_Id] = @newRoleId
                   WHERE [Id] = @candidateId
                   ";
        var role = await connection.QuerySingleOrDefaultAsync<bool>(sql, new { candidateId, newRoleId });
        return role;
    }

    // delete a candidate by candidateId
    public async Task<bool> DeleteCandidate(int candidateId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = "DELETE FROM [dbo].[candidates] WHERE [Id] = @candidateId";
        return await connection.QuerySingleOrDefaultAsync<bool>(sql, new { candidateId });
    }

    // get shortlisted candidates using jobId
    public async Task<IEnumerable<Candidate>> GetShortlistFromJobId(int jobId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var shortlist = @"
                        SELECT 
                        c.[Id], c.[Name], c.[Contact], c.[CV_FilePath], 
                        c.[CV_FileName], c.[Role_Id], c.[email]
                        FROM [dbo].[candidates] c
                        INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id] AND cj.[jobId] = @jobId AND c.[Role_Id] IN (1,2,3,6)
                        ";
        return await connection.QueryAsync<Candidate>(shortlist, new { jobId });
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

}