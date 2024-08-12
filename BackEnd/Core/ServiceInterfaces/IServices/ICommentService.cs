using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface ICommentService
{
    Task<IEnumerable<string>> UpdateApplicantComment(int jobId, int candidateId, string commentText);
}