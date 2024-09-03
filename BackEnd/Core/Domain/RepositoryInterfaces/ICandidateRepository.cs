using Domain.Entities;
using DTO.DTOs;

namespace Domain.RepositoryInterfaces;

public interface ICandidateRepository
{
    Task<IEnumerable<Candidate>> GetAll();
    Task<IEnumerable<CandidateWithComment>> GetApplicantsFromJobId(int jobId);
    Task<Candidate> Save(Candidate candidate, int jobId);
    Task<CvFileDTO> GetCvByCandidateId(int candidateId);
    Task<bool> UpdateRoleId(int candidateId, int newRoleId);
    Task<bool> DeleteCandidate(int candidateId);
    Task<IEnumerable<Candidate>> GetShortlistFromJobId(int jobId);
    Task<Candidate> GetCandidateById(int candidateId);
    Task<int> GetNoOfApplicnats(int jobId, int roleId);
    Task<int> GetRoleIdByCandidateId(int candidateId);
}