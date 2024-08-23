using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface ICommentService
{
    Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, int roleId, string commentText);
    Task<bool> CheckApplicantComment(int jobId, int candidateId);
    Task<List<int>> GetCandidateIdsOfJobId(int jobId);
    Task<int?> GetRoleIdByCandidateIdAsync(int candidateId);
    Task<List<Comment>> GetCommentsByCandidateAsync(int jobId,int candidateId);
}