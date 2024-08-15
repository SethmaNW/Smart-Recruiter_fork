using Domain.Entities;
using DTO.DTOs;

namespace ServiceInterfaces.IServices;

public interface IMarkService{
    Task<bool> SaveMark(MarkSaveDTO markSaveDTO);
}