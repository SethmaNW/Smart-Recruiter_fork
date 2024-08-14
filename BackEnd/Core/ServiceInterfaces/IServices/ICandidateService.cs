using Domain.Entities;

namespace ServiceInterfaces.IServices;
public interface ICandidateService
{
    Task<IEnumerable<Candidate>> GetAll();
    Task<IEnumerable<CandidateWithComment>> GetApplicantsFromJobId(int jobId);
    Task<Candidate> Save(Candidate candidate);
    // Task<bool> UpdateRoleId(int candidateId, int newRoleId);
}