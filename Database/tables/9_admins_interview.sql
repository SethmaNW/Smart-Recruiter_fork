USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'admins_interviews')
BEGIN
CREATE TABLE [dbo].[admins_interviews] (
    [AdminId] INT NOT NULL,
    [InterviewId] INT NOT NULL,

    CONSTRAINT [FK_Admins] FOREIGN KEY ([AdminId]) REFERENCES [dbo].[admins] ([Id]),
    CONSTRAINT [FK_Interviews] FOREIGN KEY ([InterviewId]) REFERENCES [dbo].[interviews] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [PK_Admins_Interviews] PRIMARY KEY CLUSTERED ([AdminId] ASC, [InterviewId] ASC)
);
END