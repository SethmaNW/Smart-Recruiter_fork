using Domain.Entities;

namespace ServiceInterfaces.IServices;

public interface IMarkService{
    Task<bool> SaveMark(Mark mark);
}