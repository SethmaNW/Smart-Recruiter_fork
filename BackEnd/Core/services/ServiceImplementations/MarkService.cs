using Domain.Entities;
using Domain.RepositoryInterfaces;
using DTO.DTOs;
using ServiceInterfaces.IServices;

namespace services.ServiceImplementations;

public class MarkService : IMarkService
{
    private readonly IMarkRepository _markRepository;

    public MarkService(IMarkRepository markRepository)
    {
        _markRepository = markRepository;
    }

    public async Task<bool> SaveMark(Mark mark)
    {
        return await _markRepository.SaveMark(mark);
    }

    public async Task<MarkOutputDTO> GetMarks(int candidateId, int jobId, int roleId)
    {
        return await _markRepository.GetMarks(candidateId, jobId, roleId);
    }
}