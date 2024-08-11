using Domain.Entities;
using Domain.RepositoryInterfaces;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;
public class CandidateService : ICandidateService
{
    private readonly ICandidateRepository _CandidateRepository;

    public CandidateService( ICandidateRepository candidateRepository ){
        _CandidateRepository = candidateRepository;
    }


    public async Task<IEnumerable<Candidate>> GetAll()
    {
        return await _CandidateRepository.GetAll();
    }

    public async Task<IEnumerable<Candidate>> GetApplicantsFromJobId(int jobId)
    {
        return await _CandidateRepository.GetApplicantsFromJobId(jobId);
    }

}