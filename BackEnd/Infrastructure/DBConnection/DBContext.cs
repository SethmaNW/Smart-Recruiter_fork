using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace Infrastructure.DBConnection
{
    public class DBContext
    {
        private readonly IConfiguration _configuration;

        public DBContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection GetOpenConnection()
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            var connection = new SqlConnection(connectionString);
            connection.Open();
            return connection;
        }
    }
}