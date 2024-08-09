USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'candidates')
BEGIN
CREATE TABLE [dbo].[candidates] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Name] NVARCHAR(50) NOT NULL,
    [Contact] NVARCHAR(50) NOT NULL,
    [Email] NVARCHAR(50) NOT NULL,
    [CV_FilePath] NVARCHAR(255) NOT NULL, -- Path to the CV file
    [CV_FileName] NVARCHAR(100) NOT NULL, -- Name of the CV file
    [Skills] NVARCHAR(300) NULL,
    [Available_Date] DATE NULL,
    [GitHub_Link] NVARCHAR(100) NULL,
    [LinkedIn] NVARCHAR(100) NULL,
    [Degree] NVARCHAR(50) NULL,
    [University] NVARCHAR(50) NULL,
    [GPA] FLOAT NULL,
    [Experience] NVARCHAR(500) NULL,
    [Role_Id] INT NOT NULL, -- Add Role_Id column
    CONSTRAINT [PK_contacts] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_contacts_roles] FOREIGN KEY ([Role_Id]) REFERENCES [dbo].[roles]([Id])
);
END

