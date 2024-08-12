USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'candidates')
BEGIN
CREATE TABLE [dbo].[candidates] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Name] NVARCHAR(255) NOT NULL,
    [Contact] NVARCHAR(50) NOT NULL,
    [Email] NVARCHAR(128) NOT NULL,
    [CV_FilePath] NVARCHAR(255) NOT NULL, -- Path to the CV file
    [CV_FileName] NVARCHAR(255) NOT NULL, -- Name of the CV file
    [Skills] NVARCHAR(300) NULL,
    [Available_Date] DATE NULL,
    [GitHub_Link] NVARCHAR(255) NULL,
    [LinkedIn] NVARCHAR(255) NULL,
    [Degree] NVARCHAR(255) NULL,
    [University] NVARCHAR(255) NULL,
    [Reason] NVARCHAR(500) NULL,
    [Experience] NVARCHAR(500) NULL,
    [Role_Id] INT NOT NULL, -- Add Role_Id column
    CONSTRAINT [PK_candidates] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_candidate_roles] FOREIGN KEY ([Role_Id]) REFERENCES [dbo].[roles]([Id])
);
END

