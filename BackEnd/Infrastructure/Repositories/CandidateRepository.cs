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
    public async Task<IEnumerable<Candidate>> GetAll()
    {
        using var connection = _dbContext.GetOpenConnection();
         
        var candidates = await connection.QueryAsync<Candidate>("SELECT * FROM Candidates");
        return candidates.ToList();
    }

    // public async Task<IEnumerable<Candidate>> GetApplicantsFromJobId(int jobId)
    // {
    //     using var connection = _dbContext.GetOpenConnection();

    //     //  if a candidate might have multiple comments
    //     // var candidateDict = new Dictionary<int, Candidate>();

    //     var sql = "EXEC dbo.getApplicantsFromJobId @jobId";

    //     var applicants = await connection.QueryAsync<Candidate, string, Candidate>(
    //         sql,
    //         (candidate, comment) =>
    //         {
    //             if (!applicants.TryGetValue(candidate.Id, out var currentCandidate))
    //             {
    //                 currentCandidate = candidate;
    //                 currentCandidate.Comments = new List<string>();
    //                 applicants.Add(currentCandidate.Id, currentCandidate);
    //             }
    //             if (!string.IsNullOrEmpty(comment))
    //             {
    //                 currentCandidate.Comments.Add(comment);
    //             }
    //             return currentCandidate;
    //         },
    //         splitOn: "CommentText",
    //         param: new { jobId }
    //     );

    //     return applicants.Values;
    // }


}