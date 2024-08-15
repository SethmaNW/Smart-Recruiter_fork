using Domain.Entities;
using DTO.DTOs;

namespace Domain.RepositoryInterfaces;

public interface IMarkRepository
{
    Task<bool> SaveMark(MarkSaveDTO mark);
}