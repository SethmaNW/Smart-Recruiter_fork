using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICommentRepository
{
    Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, string commentText);
    Task<bool> CheckApplicantComment(int jobId, int candidateId);
}