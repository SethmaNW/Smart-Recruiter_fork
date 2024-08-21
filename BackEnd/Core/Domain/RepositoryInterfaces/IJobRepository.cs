using Domain.Entities;
using DTO.DTOs;

namespace Domain.RepositoryInterfaces;

public interface IJobRepository{
    Task<IEnumerable<Job>> GetAll();
    Task<IEnumerable<Job>> GetActiveJobs();
    Task<JobDescriptionDTO> GetJobDescriptionByJobId(int jobId);
    Task<Job> Save(Job job);
    Task<bool> Update(Job job);
    Task<IEnumerable<string>> GetJobPosition(int jobId);
}
