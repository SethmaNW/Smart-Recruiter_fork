using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICommentRepository
{
    Task<IEnumerable<string>> UpdateApplicantComment(int jobId, int candidateId, string commentText);
}