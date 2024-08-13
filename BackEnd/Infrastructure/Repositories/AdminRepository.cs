using Dapper;
using Dapper.Contrib.Extensions;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;
using System.Linq;

namespace Infrastructure.Repositories;

public class AdminRepository : IAdminRepository
{
    private DBContext _dbContext;
    public AdminRepository(DBContext dbContext)
    {
        _dbContext = dbContext;
    }

    // get adminId from the email
    public async Task<IEnumerable<int>> GetAdminEmail(string email)
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = @"
                    SELECT Id FROM [dbo].[admins] WHERE [email] = @email
                    ";
        var a_email = await connection.QueryAsync<int>(sql, new { email });

        return a_email;
    }
}
