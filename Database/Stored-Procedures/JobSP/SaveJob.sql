USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[SaveJob]
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
    INSERT INTO [dbo].[jobs] (
        Title, Description, NoOfAvailablePositions, Location, Department, ActiveStatus, 
        AttitudeAndDiscipline, TechnicalKnowledge, EducationBackground, ProfessionalQualification, 
        CareerBackground, CommunicationSkills, CulturalFit, FamilyBackground, IQCreativityProblemSolvingSkills, 
        ManagementSkills
    ) VALUES (
        @Title, @Description, @NoOfAvailablePositions, @Location, @Department, @ActiveStatus, 
        @AttitudeAndDiscipline, @TechnicalKnowledge, @EducationBackground, @ProfessionalQualification, 
        @CareerBackground, @CommunicationSkills, @CulturalFit, @FamilyBackground, @IQCreativityProblemSolvingSkills, 
        @ManagementSkills
    );

    SELECT CAST(SCOPE_IDENTITY() as int) AS Id;
END
GO