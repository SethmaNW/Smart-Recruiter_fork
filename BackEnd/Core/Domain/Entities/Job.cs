namespace Domain.Entities;

public class Job {
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int? NoOfAvailablePositions { get; set; }
    public string? Location { get; set; }
    public string? Department { get; set; }
    public bool? ActiveStatus { get; set; } = true;
    public int? AttitudeAndDiscipline { get; set; } = 0;
    public int? TechnicalKnowledge { get; set; } = 0;
    public int? EducationBackground { get; set; } = 0;
    public int? ProfessionalQualification { get; set; } = 0;
    public int? CareerBackground { get; set; } = 0;
    public int? CommunicationSkills { get; set; } = 0;
    public int? CulturalFit { get; set; } = 0;
    public int? FamilyBackground { get; set; } = 0;
    public int? IQCreativityProblemSolvingSkills { get; set; } = 0;
    public int? ManagementSkills { get; set; } = 0;
}