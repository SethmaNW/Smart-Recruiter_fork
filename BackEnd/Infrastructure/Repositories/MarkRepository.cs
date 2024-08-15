namespace Infrastructure.Repositories;

using System.Data;
using Dapper;
using Domain.Entities;
using Domain.RepositoryInterfaces;
using DTO.DTOs;
using Infrastructure.DBConnection;

public class MarkRepository : IMarkRepository

{
    private readonly DBContext _dbConnection;

    public MarkRepository(DBContext dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<bool> SaveMark(MarkSaveDTO mark)
    {
        using IDbConnection dbConnection = _dbConnection.GetOpenConnection();

        var parameters = new
    {
        AdminId = mark.AdminId,
        JobId = mark.JobId,
        CandidateId = mark.CandidateId,
        RoleId = mark.RoleId,
        Criteria = mark.Criteria,
        Value = mark.Value
    };
        await dbConnection.ExecuteAsync("SaveOrUpdateMark", parameters, commandType: CommandType.StoredProcedure);
        return true;
        // Error handling not implemented
    }
}