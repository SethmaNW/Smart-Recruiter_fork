using Domain.RepositoryInterfaces;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;
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