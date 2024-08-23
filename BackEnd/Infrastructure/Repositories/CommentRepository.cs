using Dapper;
using Dapper.Contrib.Extensions;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;
using System.Linq;

namespace Infrastructure.Repositories;

public class CommentRepository: ICommentRepository
{
    private DBContext _dbContext;
    public CommentRepository(DBContext dbContext)
    {
        _dbContext = dbContext;
    }

    // post comment related to candidate in applicants page
    public async Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, int roleId, string commentText)
    {
        try
        {
            using var connection = _dbContext.GetOpenConnection();
            var sql = "EXEC UpdateApplicantComment @candidateId, @jobId, @adminId, @roleId, @commentText";

            var rowsAffected = await connection.ExecuteAsync(sql, new { jobId, candidateId, adminId, roleId, commentText });

            return rowsAffected > 0;
        }
        catch (Exception ex) { 
            throw new Exception($"Error posting comment: {ex.Message}");
        }
    }

    // check whether there is a comment under relevant candidateId and jobId
    public async Task<bool> CheckApplicantComment(int jobId, int candidateId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = "EXEC CheckApplicantComment @candidateId, @jobId";
        var check_comment = await connection.QuerySingleOrDefaultAsync<bool>(sql, new { jobId, candidateId });

        return check_comment;
    }

    // get all the candidateIds under relevant jobId
    public async Task<List<int>> GetCandidateIdsOfJobId(int jobId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = "EXEC GetCandidateIdsOfJobId @jobId";
        var candidateIds = await connection.QueryAsync<int>(sql, new { jobId });

        return candidateIds.ToList();
    }

}
