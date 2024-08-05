USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'interviews')
BEGIN
CREATE TABLE [dbo].[interviews] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [InterviewDateTime] DATETIME NOT NULL,
    [CandidateId] INT NOT NULL,
    [JobId] INT NOT NULL,
    [Duration] INT NOT NULL DEFAULT 30, -- in minutes

    CONSTRAINT [FK_Interviews_Candidates] FOREIGN KEY ([CandidateId]) REFERENCES [dbo].[candidates] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Interviews_Jobs] FOREIGN KEY ([JobId]) REFERENCES [dbo].[jobs] ([Id]),
    CONSTRAINT [PK_Interviews] PRIMARY KEY CLUSTERED ([Id] ASC)
);
END