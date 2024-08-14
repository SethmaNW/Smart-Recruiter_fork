USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'marks')
BEGIN
CREATE TABLE [dbo].[marks] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    -- Evaluation criteria marks 
    [AttitudeAndDiscipline] INT NOT NULL DEFAULT 0,
    [TechnicalKnowledge] INT NOT NULL DEFAULT 0,
    [EducationBackground] INT NOT NULL DEFAULT 0,
    [ProfessionalQualification] INT NOT NULL DEFAULT 0,
    [CarrierBackground] INT NOT NULL DEFAULT 0,
    [CommunicationSkills] INT NOT NULL DEFAULT 0,
    [CulturalFit] INT NOT NULL DEFAULT 0,
    [FamilyBackground] INT NOT NULL DEFAULT 0,
    [IQCreativityProblemSolvingSkills] INT NOT NULL DEFAULT 0,
    [ManagementSkills] INT NOT NULL DEFAULT 0,

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