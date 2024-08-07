using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;

namespace Repositories.DatabaseConnection;

public class DataContext
{
    private DBSettings _dbSettings;

    public DataContext(IOptions<DBSettings> dbSettings)
    {
        _dbSettings = dbSettings.Value;
    }

    public IDbConnection CreateConnection()
    {
        var connectionString = $"Server={_dbSettings.Server}; Database={_dbSettings.Database}; User Id={_dbSettings.UserId}; Password={_dbSettings.Password};";
        return new SqlConnection(connectionString);
    }
}

