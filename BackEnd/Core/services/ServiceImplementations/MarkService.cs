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

    public async Task<bool> SaveMark(MarkSaveDTO markSaveDTO)
    {
        var criteriaMap = new Dictionary<string, string>
        {
            {"Attitude and Discipline", "AttitudeAndDiscipline"},
            {"Technical Knowledge", "TechnicalKnowledge"},
            {"Education Background", "EducationBackground"},
            {"Professional Qualification", "ProfessionalQualification"},
            {"Carrier Background", "CareerBackground"},
            {"Communication Skills", "CommunicationSkills"},
            {"Cultrul fit", "CulturalFit"},
            {"Family Background", "FamilyBackground"},
            {"IQ/Craetivity/Problem Solving Skill", "IQCreativityProblemSolvingSkills"},
            {"Management  Skills", "ManagementSkills"}
        };

        if (markSaveDTO.Criteria != null){
            markSaveDTO.Criteria = criteriaMap[markSaveDTO.Criteria];
        }
        return await _markRepository.SaveMark(markSaveDTO);
    }
}