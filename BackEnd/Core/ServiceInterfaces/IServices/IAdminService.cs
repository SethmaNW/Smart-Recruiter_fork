using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface IAdminService
{
    Task<IEnumerable<int>> GetAdminEmail(string email);
}