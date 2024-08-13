using Domain.Entities;

namespace Domain.RepositoryInterfaces;

public interface IAdminRepository
{
    Task<IEnumerable<int>> GetAdminEmail(string email);
}