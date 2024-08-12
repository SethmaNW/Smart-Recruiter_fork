using Domain.Entities;
using Domain.RepositoryInterfaces;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;

public class CommentService : ICommentService
{
    private readonly ICommentRepository _CommentRepository;

    public CommentService(ICommentRepository commentRepository)
    {
        _CommentRepository = commentRepository;
    }

    public async Task<IEnumerable<string>> UpdateApplicantComment(int jobId, int candidateId, int adminId, string commentText)
    {
        return await _CommentRepository.UpdateApplicantComment(jobId, candidateId, adminId, commentText);
    }
}