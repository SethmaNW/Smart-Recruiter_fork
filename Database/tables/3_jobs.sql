USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'jobs')
BEGIN
CREATE TABLE [dbo].[jobs] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Title] NVARCHAR(50) NOT NULL,
    [Description] NVARCHAR(1000) NOT NULL,
    [NoofAvailablePositions] INT NULL,
    [Location] NVARCHAR(50) NOT NULL,
    [Department] NVARCHAR(50) NOT NULL,
    -- The BIT data type is used to store boolean values, where 0 represents FALSE and 1 represents TRUE.
    [ActiveStatus] BIT NOT NULL DEFAULT 1, -- Default value is true. this stores job active status
    -- Evaluation criteria weights
    [AttitudeAndDiscipline] INT NOT NULL DEFAULT 0,
    [TechnicalKnowledge] INT NOT NULL DEFAULT 0,
    [EducationBackground] INT NOT NULL DEFAULT 0,
    [ProfessionalQualification] INT NOT NULL DEFAULT 0,
    [CareerBackground] INT NOT NULL DEFAULT 0,
    [CommunicationSkills] INT NOT NULL DEFAULT 0,
    [CulturalFit] INT NOT NULL DEFAULT 0,
    [FamilyBackground] INT NOT NULL DEFAULT 0,
    [IQCreativityProblemSolvingSkills] INT NOT NULL DEFAULT 0,
    [ManagementSkills] INT NOT NULL DEFAULT 0,

    CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED ([Id] ASC)
);
END