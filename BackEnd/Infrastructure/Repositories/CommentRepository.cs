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
    public async Task<IEnumerable<string>> UpdateApplicantComment(int jobId, int candidateId, int adminId, string commentText)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"
                    IF EXISTS (SELECT 1 FROM [dbo].[Comments] WHERE [CandidateId] = @candidateId AND [jobId] = @jobId)
                    BEGIN 
	                    UPDATE [dbo].[comments] 
                        SET [Comment] = @commentText 
                        WHERE [CandidateId] = @candidateId AND [jobId] = @jobId
                    END

                    ELSE
                    BEGIN 
	                    INSERT INTO [dbo].[Comments] ([CandidateId], [jobId], [adminId], [Comment])
	                    VALUES (@candidateId, @jobId, @adminId, @commentText )
                    END 
                    ";
        var comments = await connection.QueryAsync<string>(sql, new { jobId, candidateId, adminId, commentText });

        return comments;
    }
}
