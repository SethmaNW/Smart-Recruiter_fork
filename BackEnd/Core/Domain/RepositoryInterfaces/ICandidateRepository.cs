using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICandidateRepository
{
    Task<IEnumerable<Candidate>> GetAll();
    //Task<IEnumerable<Candidate>> GetApplicantsFromJobId(int jobId);
}