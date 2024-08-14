USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[UpdateJob]
    @Id INT,
    @Title NVARCHAR(255),
    @Description NVARCHAR(MAX),
    @NoOfAvailablePositions INT,
    @Location NVARCHAR(255),
    @Department NVARCHAR(255),
    @ActiveStatus BIT,
    @AttitudeAndDiscipline NVARCHAR(MAX),
    @TechnicalKnowledge NVARCHAR(MAX),
    @EducationBackground NVARCHAR(MAX),
    @ProfessionalQualification NVARCHAR(MAX),
    @CareerBackground NVARCHAR(MAX),
    @CommunicationSkills NVARCHAR(MAX),
    @CulturalFit NVARCHAR(MAX),
    @FamilyBackground NVARCHAR(MAX),
    @IQCreativityProblemSolvingSkills NVARCHAR(MAX),
    @ManagementSkills NVARCHAR(MAX)
AS
BEGIN
    UPDATE jobs
    SET 
        Title = @Title,
        Description = @Description,
        NoOfAvailablePositions = @NoOfAvailablePositions,
        Location = @Location,
        Department = @Department,
        ActiveStatus = @ActiveStatus,
        AttitudeAndDiscipline = @AttitudeAndDiscipline,
        TechnicalKnowledge = @TechnicalKnowledge,
        EducationBackground = @EducationBackground,
        ProfessionalQualification = @ProfessionalQualification,
        CareerBackground = @CareerBackground,
        CommunicationSkills = @CommunicationSkills,
        CulturalFit = @CulturalFit,
        FamilyBackground = @FamilyBackground,
        IQCreativityProblemSolvingSkills = @IQCreativityProblemSolvingSkills,
        ManagementSkills = @ManagementSkills
    WHERE id = @Id;
END
GO