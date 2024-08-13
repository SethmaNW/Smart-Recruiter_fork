using Dapper;
using Dapper.Contrib.Extensions;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;
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
            c.[Degree], c.[Experience], com.[Comment] 
        FROM [dbo].[candidates] c
        INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id]
        LEFT JOIN [dbo].[comments] com ON c.[Id] = com.[CandidateId] AND com.[jobId] = @jobId
        WHERE cj.[JobId] = @jobId AND c.[Role_Id] IN (0, 7)";
        //var sql = "EXEC dbo.getApplicantsFromJobId @jobId";

        var candidates = await connection.QueryAsync<CandidateWithComment>(sql, new { jobId });

        return candidates.ToList();
    }


    //    public async Task<IEnumerable<Candidate>> GetApplicantsFromJobId(int jobId)
    //{
    //    using var connection = _dbContext.GetOpenConnection();

    //    //  if a candidate might have multiple comments
    //    var candidateDict = new Dictionary<int, Candidate>();

    //    //var sql = "SELECT * FROM Candidates";
    //    //var sql = "EXEC dbo.getApplicantsFromJobId @jobId";
    //    var sql = "SELECT c.[Name],c.[Contact],c.[CV_FilePath],c.[CV_FileName],c.[Skills],c.[Available_Date],c.[Degree],c.[Experience],com.[Comment] FROM [dbo].[candidates] c INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id] LEFT JOIN [dbo].[comments] com ON c.[Id] = com.[CandidateId] WHERE cj.[JobId] = @jobId AND c.[Role_Id] IN (0, 7)";

    //    await connection.QueryAsync<Candidate, string, Candidate>(
    //        sql,
    //        (candidate, comment) =>
    //        {
    //            if (!candidateDict.TryGetValue(candidate.Id, out var currentCandidate))
    //            {
    //                currentCandidate = candidate;
    //                currentCandidate.Comments = new List<string>();
    //                candidateDict.Add(currentCandidate.Id, currentCandidate);
    //            }
    //            if (!string.IsNullOrEmpty(comment))
    //            {
    //                currentCandidate.Comments.Add(comment);
    //            }
    //            return currentCandidate;
    //        },
    //        splitOn: "Comment",
    //        param: new { jobId }
    //    );

    //    return candidateDict.Values;
    //}

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

}