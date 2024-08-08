using Domain.Entities;

namespace ServiceInterfaces.IServices;
public interface ICandidateService
{
    Task<IEnumerable<Candidate>> GetAll();
}