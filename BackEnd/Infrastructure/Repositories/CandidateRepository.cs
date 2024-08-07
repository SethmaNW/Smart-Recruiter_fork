using Domain.RepositoryInterfaces;

namespace Infrastructure.Repositories;
public class CandidateRepository : ICandidateRepository
{
    public string GetAll()
    {
        return "Hello from CandidatesRepository!";
    }
}