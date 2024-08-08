namespace Infrastructure.Repositories;
using Dapper;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;

public class JobRepository : IJobRepository
{
    private readonly DBContext _dbConnection;

    public JobRepository(DBContext dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<IEnumerable<Job>> GetAll()
    {
        using var connection = _dbConnection.GetOpenConnection();
        var sql = "SELECT * FROM jobs";
        return (await connection.QueryAsync<Job>(sql)).ToList();
    }
}