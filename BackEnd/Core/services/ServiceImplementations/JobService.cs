using Domain.Entities;
using Domain.RepositoryInterfaces;
using DTO.DTOs;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;

// Primary constructor used for dependency injection
public class JobService(IJobRepository jobRepository) : IJobService
{
    private readonly IJobRepository _jobRepository = jobRepository;

    public async Task<IEnumerable<Job>> GetAll()
    {
        return await _jobRepository.GetAll();
    }

    public async Task<IEnumerable<Job>> GetActiveJobs()
    {
        return await _jobRepository.GetActiveJobs();
    }

    public async Task<JobDescriptionDTO> GetJobDescriptionByJobId(int jobId)
    {
        return await _jobRepository.GetJobDescriptionByJobId(jobId);
    }
    public async Task<Job> Save(Job job)
    {
        return await _jobRepository.Save(job);
    }

    public async Task<bool> Update(Job job)
    {
        return await _jobRepository.Update(job);
    }

    public async Task<IEnumerable<string>> GetJobPosition(int jobId)
    {
        return await _jobRepository.GetJobPosition(jobId);
    }
}