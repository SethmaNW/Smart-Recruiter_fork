using Domain.Entities;
using DTO.DTOs;

namespace ServiceInterfaces.IServices;

public interface IJobService
{
    Task<IEnumerable<Job>> GetAll();
    Task<IEnumerable<Job>> GetActiveJobs();
    Task<Job> GetJobDescriptionByJobId(int jobId);
    Task<Job> Save(Job job);
    Task<bool> Update(Job job);
    Task<IEnumerable<string>> GetJobPosition(int jobId);
}