using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface IJobService
{
    Task<IEnumerable<Job>> GetAll();
    Task<IEnumerable<Job>> GetActiveJobs();
    Task<Job> Save(Job job);
    Task<bool> Update(Job job);
    Task<IEnumerable<string>> GetJobPosition(int jobId);
}