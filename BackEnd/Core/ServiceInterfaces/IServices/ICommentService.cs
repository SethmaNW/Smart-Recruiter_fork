using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface ICommentService
{
    Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, string commentText);
    Task<bool> CheckApplicantComment(int jobId, int candidateId);
}