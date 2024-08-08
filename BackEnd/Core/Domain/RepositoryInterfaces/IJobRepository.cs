using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface IJobRepository{
    Task<IEnumerable<Job>> GetAll();
}
