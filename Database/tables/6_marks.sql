USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'marks')
BEGIN
CREATE TABLE [dbo].[marks] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    -- Evaluation criteria marks 
    [AttitudeAndDiscipline] INT NULL,
    [TechnicalKnowledge] INT NULL,
    [EducationBackground] INT NULL,
    [ProfessionalQualification] INT NULL,
    [CareerBackground] INT NULL,
    [CommunicationSkills] INT NULL,
    [CulturalFit] INT NULL,
    [FamilyBackground] INT NULL,
    [IQCreativityProblemSolvingSkills] INT NULL,
    [ManagementSkills] INT NULL,

    [AdminId] INT NOT NULL,
    [JobId] INT NOT NULL,
    [CandidateId] INT NOT NULL,
    [RoleId] INT NOT NULL, -- candidate role

    CONSTRAINT [FK_Marks_Admins] FOREIGN KEY ([AdminId]) REFERENCES [dbo].[admins] ([Id]),
    CONSTRAINT [FK_Marks_Jobs] FOREIGN KEY ([JobId]) REFERENCES [dbo].[jobs] ([Id]),
    CONSTRAINT [FK_Marks_Candidates] FOREIGN KEY ([CandidateId]) REFERENCES [dbo].[candidates] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Marks_Roles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[roles] ([Id]),
    CONSTRAINT [PK_Marks] PRIMARY KEY CLUSTERED ([Id] ASC)
);
END