USE SmartRecruiterDB;

GO

CREATE PROCEDURE SaveMarks
    @AttitudeAndDiscipline INT = NULL,
    @TechnicalKnowledge INT = NULL,
    @EducationBackground INT = NULL,
    @ProfessionalQualification INT = NULL,
    @CareerBackground INT = NULL,
    @CommunicationSkills INT = NULL,
    @CulturalFit INT = NULL,
    @FamilyBackground INT = NULL,
    @IQCreativityProblemSolvingSkills INT = NULL,
    @ManagementSkills INT = NULL,
    @AdminId INT,
    @JobId INT,
    @CandidateId INT,
    @RoleId INT
AS
BEGIN
    INSERT INTO [dbo].[marks] (
        [AttitudeAndDiscipline],
        [TechnicalKnowledge],
        [EducationBackground],
        [ProfessionalQualification],
        [CareerBackground],
        [CommunicationSkills],
        [CulturalFit],
        [FamilyBackground],
        [IQCreativityProblemSolvingSkills],
        [ManagementSkills],
        [AdminId],
        [JobId],
        [CandidateId],
        [RoleId]
    )
    VALUES (
        @AttitudeAndDiscipline,
        @TechnicalKnowledge,
        @EducationBackground,
        @ProfessionalQualification,
        @CareerBackground,
        @CommunicationSkills,
        @CulturalFit,
        @FamilyBackground,
        @IQCreativityProblemSolvingSkills,
        @ManagementSkills,
        @AdminId,
        @JobId,
        @CandidateId,
        @RoleId
    );
END;