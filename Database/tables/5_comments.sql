USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'comments')
BEGIN
CREATE TABLE [dbo].[comments] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Comment] NVARCHAR(500) NOT NULL,
    [AdminId] INT NOT NULL,
    [CandidateId] INT NOT NULL,
    [JobId] INT NULL,   -- there can be have comments for deleted jobs
    [RoleId] INT NOT NULL, -- candidate role

    CONSTRAINT [FK_Comments_Admins] FOREIGN KEY ([AdminId]) REFERENCES [dbo].[admins] ([Id]),
    CONSTRAINT [FK_Comments_Candidates] FOREIGN KEY ([CandidateId]) REFERENCES [dbo].[candidates] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Comments_Jobs] FOREIGN KEY ([JobId]) REFERENCES [dbo].[jobs] ([Id]),
    CONSTRAINT [FK_Comments_Roles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[roles] ([Id]),
    CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED ([Id] ASC)
);
END