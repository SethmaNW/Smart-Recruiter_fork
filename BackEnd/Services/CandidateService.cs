namespace Services;

using Repositories;

public interface ICandidateService
{
    string GetAll();
}
public class CandidateService : ICandidateService
{
    private readonly ICandidateRepository _CandidateRepository;

    public CandidateService(
        ICandidateRepository candidateRepository
    ){
        _CandidateRepository = candidateRepository;
    }
    public string GetAll()
    {
        return _CandidateRepository.GetAll();
    }
}

