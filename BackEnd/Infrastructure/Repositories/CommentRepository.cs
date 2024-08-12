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

    // update applicants page comments related to candidate
    public async Task<IEnumerable<string>> UpdateApplicantComment(int jobId, int candidateId, string commentText)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"
                     
                    ";
        var comments = await connection.QueryAsync<string>(sql, new { jobId, candidateId, commentText });

        return comments;
    }
}
