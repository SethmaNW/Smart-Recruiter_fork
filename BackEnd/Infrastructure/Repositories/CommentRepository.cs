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

    // update applicants page comment related to candidate
    public async Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, int roleId, string commentText)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"                    
                    BEGIN 
	                    INSERT INTO [dbo].[Comments] ([CandidateId], [jobId], [adminId], [roleId], [Comment])
	                    VALUES (@candidateId, @jobId, @adminId, @roleId, @commentText )
                    END 
                    ";

        var rowsAffected = await connection.ExecuteAsync(sql, new { jobId, candidateId, adminId, roleId, commentText });

        return rowsAffected > 0;
    }

    // check whether there is a comment under relevant candidateId and jobId
    public async Task<bool> CheckApplicantComment(int jobId, int candidateId)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"
                    SELECT CASE
                    WHEN EXISTS 
                    ( SELECT 1 FROM [dbo].[comments] WHERE [CandidateId] = @candidateId AND [jobId] = @jobId )
                    THEN CAST (1 AS BIT)
                    ELSE CAST (0 AS BIT)
                    END
                    ";
        var check_comment = await connection.QuerySingleOrDefaultAsync<bool>(sql, new { jobId, candidateId });

        return check_comment;
    }
}
