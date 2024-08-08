USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'candidates_jobs')
BEGIN
CREATE TABLE [dbo].[candidates_jobs] (
    [CandidateID] INT NOT NULL,
    [JobID] INT NOT NULL,

    CONSTRAINT [FK_Candidates] FOREIGN KEY ([CandidateId]) REFERENCES [dbo].[candidates] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Jobs] FOREIGN KEY ([JobId]) REFERENCES [dbo].[jobs] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [PK_Candidates_jobs] PRIMARY KEY CLUSTERED ([CandidateID] ASC, [JobID] ASC)
);
END