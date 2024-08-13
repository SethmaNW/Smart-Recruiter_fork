using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICandidateRepository
{
    Task<IEnumerable<Candidate>> GetAll();
    Task<IEnumerable<CandidateWithComment>> GetApplicantsFromJobId(int jobId);
    Task<Candidate> Save(Candidate candidate);
}