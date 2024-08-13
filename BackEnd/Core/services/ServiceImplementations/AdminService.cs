using Domain.Entities;
using Domain.RepositoryInterfaces;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;

public class AdminService : IAdminService
{
    private readonly IAdminRepository _AdminRepository;

    public AdminService(IAdminRepository adminRepository)
    {
        _AdminRepository = adminRepository;
    }

    // get adminId from the email
    public async Task<IEnumerable<int>> GetAdminEmail(string email)
    {
        return await _AdminRepository.GetAdminEmail(email);
    }
}