namespace Repositories;

public interface ICandidateRepository
{
    string GetAll();
}

public class CandidateRepository : ICandidateRepository
{
    public string GetAll()
    {
        return "Hello from CandidatesRepository!";
    }
}
