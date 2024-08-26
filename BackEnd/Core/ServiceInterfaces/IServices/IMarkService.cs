using Domain.Entities;
using DTO.DTOs;

namespace ServiceInterfaces.IServices;

public interface IMarkService{
    Task<bool> SaveMark(Mark mark);
    Task<MarkOutputDTO> GetMarks(int candidateId, int jobId, int roleId);
}