using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICandidateRepository
{
    Task<IEnumerable<Candidate>> GetAll();
    Task<IEnumerable<CandidateWithComment>> GetApplicantsFromJobId(int jobId);
    Task<Candidate> Save(Candidate candidate);
    Task<bool> UpdateRoleId(int candidateId, int newRoleId);
    Task<bool> DeleteCandidate(int candidateId);
    Task<IEnumerable<Candidate>> GetShortlistFromJobId(int jobId);
}