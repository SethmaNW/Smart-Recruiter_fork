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

    // update comments in Applicants page
    public async Task<bool> UpdateApplicantComment(int jobId, int candidateId, int adminId, int roleId, string commentText)
    {
        return await _CommentRepository.UpdateApplicantComment(jobId, candidateId, adminId, roleId, commentText);
    }

    // check whether there is a comment under relevant candidateId and jobId
    public async Task<bool> CheckApplicantComment(int jobId, int candidateId)
    {
        return await _CommentRepository.CheckApplicantComment(jobId, candidateId);
    }

    // get all the candidateIds under relevant jobId
    public async Task<List<int>> GetCandidateIdsOfJobId(int jobId)
    {
        return await _CommentRepository.GetCandidateIdsOfJobId(jobId);
    }

    //get all the roleId under relevant CandidateId
    public async Task<int?> GetRoleIdByCandidateIdAsync(int candidateId)
    {
        return await _CommentRepository.GetRoleIdByCandidateIdAsync(candidateId);
    }
    
    //retrieving comment 
     public async Task<List<Comment>> GetCommentByCandidateIdAsync(int jobId,int candidateId)
    {
        return await _CommentRepository.GetCommentByCandidateIdAsync(jobId,candidateId);
    }
}
