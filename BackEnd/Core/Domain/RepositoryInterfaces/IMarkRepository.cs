using Domain.Entities;
using DTO.DTOs;

namespace Domain.RepositoryInterfaces;

public interface IMarkRepository
{
    Task<bool> SaveMark(Mark mark);
    Task<MarkOutputDTO> GetMarks(int candidateId, int jobId, int roleId);
}