-- INSERT INTO [dbo].[marks] 
--     ([AttitudeAndDiscipline], [TechnicalKnowledge], [EducationBackground], [ProfessionalQualification], 
--      [CareerBackground], [CommunicationSkills], [CulturalFit], [FamilyBackground], 
--      [IQCreativityProblemSolvingSkills], [ManagementSkills], [AdminId], [JobId], [CandidateId], [RoleId])
-- VALUES
--     (0, 1, 2, 1, 2, 5, 0, 0, 0, 0, |1, 1, 3, 1),
--     (1, 1, 1, 1, 1, 1, 1, 1, 1, 0, |2, 1, 3, 1)

-- weights
-- 8, 9, 7, 6, 5, 8, 7, 6, 9, 7


USE SmartRecruiterDB;
GO

-- Declare variables to capture the output parameters
DECLARE @FinalScore DECIMAL(18, 5),
        @TotalMark DECIMAL(18, 5),
        @AttitudeAndDisciplineParticipation DECIMAL(18, 5),
        @TechnicalKnowledgeParticipation DECIMAL(18, 5),
        @EducationBackgroundParticipation DECIMAL(18, 5),
        @ProfessionalQualificationParticipation DECIMAL(18, 5),
        @CareerBackgroundParticipation DECIMAL(18, 5),
        @CommunicationSkillsParticipation DECIMAL(18, 5),
        @CulturalFitParticipation DECIMAL(18, 5),
        @FamilyBackgroundParticipation DECIMAL(18, 5),
        @IQCreativityProblemSolvingSkillsParticipation DECIMAL(18, 5),
        @ManagementSkillsParticipation DECIMAL(18, 5);

-- Execute the stored procedure with input parameters
EXEC CalculateMarksForRole1
    @CandidateId = 3, -- Replace with actual CandidateId
    @JobId = 1,       -- Replace with actual JobId
    @RoleId = 1,      -- Replace with actual RoleId
    @FinalScore = @FinalScore OUTPUT,
    @TotalMark = @TotalMark OUTPUT,
    @AttitudeAndDisciplineParticipation = @AttitudeAndDisciplineParticipation OUTPUT,
    @TechnicalKnowledgeParticipation = @TechnicalKnowledgeParticipation OUTPUT,
    @EducationBackgroundParticipation = @EducationBackgroundParticipation OUTPUT,
    @ProfessionalQualificationParticipation = @ProfessionalQualificationParticipation OUTPUT,
    @CareerBackgroundParticipation = @CareerBackgroundParticipation OUTPUT,
    @CommunicationSkillsParticipation = @CommunicationSkillsParticipation OUTPUT,
    @CulturalFitParticipation = @CulturalFitParticipation OUTPUT,
    @FamilyBackgroundParticipation = @FamilyBackgroundParticipation OUTPUT,
    @IQCreativityProblemSolvingSkillsParticipation = @IQCreativityProblemSolvingSkillsParticipation OUTPUT,
    @ManagementSkillsParticipation = @ManagementSkillsParticipation OUTPUT;

-- Select the output parameters to see the results
SELECT 
    @FinalScore AS FinalScore,
    @TotalMark AS TotalMark,
    @AttitudeAndDisciplineParticipation AS AttitudeAndDisciplineParticipation,
    @TechnicalKnowledgeParticipation AS TechnicalKnowledgeParticipation,
    @EducationBackgroundParticipation AS EducationBackgroundParticipation,
    @ProfessionalQualificationParticipation AS ProfessionalQualificationParticipation,
    @CareerBackgroundParticipation AS CareerBackgroundParticipation,
    @CommunicationSkillsParticipation AS CommunicationSkillsParticipation,
    @CulturalFitParticipation AS CulturalFitParticipation,
    @FamilyBackgroundParticipation AS FamilyBackgroundParticipation,
    @IQCreativityProblemSolvingSkillsParticipation AS IQCreativityProblemSolvingSkillsParticipation,
    @ManagementSkillsParticipation AS ManagementSkillsParticipation;