using Dapper;
using Domain.RepositoryInterfaces;
using Infrastructure.DBConnection;

namespace Infrastructure.Repositories;
public class CandidateRepository : ICandidateRepository
{
    private DBContext _dbContext;
    public CandidateRepository(DBContext dbContext)
    {
        _dbContext = dbContext;
    }
    public string GetAll()
    {
        using var connection = _dbContext.GetOpenConnection();
        var sql = """
            SELECT Description FROM dbo.roles WHERE Id = 1
        """;
        return connection.QuerySingleOrDefault<string>(sql);
        //return "Hello from CandidatesRepository!";
    }
}