using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface ICandidateRepository
{
    Task<IEnumerable<Candidate>> GetAll();
}