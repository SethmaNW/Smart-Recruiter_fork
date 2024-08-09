namespace Domain.Entities
{
    public class Marks
    {
        public int Id { get; set; }

        // Evaluation criteria marks
        public int? AttitudeAndDiscipline { get; set; }
        public int? TechnicalKnowledge { get; set; }
        public int? EducationBackground { get; set; }
        public int? ProfessionalQualification { get; set; }
        public int? CarrierBackground { get; set; }
        public int? CommunicationSkills { get; set; }
        public int? CulturalFit { get; set; }
        public int? FamilyBackground { get; set; }
        public int? IQCreativityProblemSolvingSkills { get; set; }
        public int? ManagementSkills { get; set; }

        // Foreign key relationships
        public int? AdminId { get; set; }
        public int? JobId { get; set; }
        public int? CandidateId { get; set; }
    }
}
