USE SmartRecruiterDB;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES 
               WHERE TABLE_SCHEMA = 'dbo' 
                AND TABLE_NAME = 'roles')
BEGIN
CREATE TABLE [dbo].[roles] (
    [Id] INT IDENTITY(0,1) NOT NULL,
    [Description] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED ([Id] ASC)
);
END

-- Insert values into the roles table
INSERT INTO dbo.roles (Description)
VALUES ('Applicant for a job'),
       ('first interview selected'),
       ('Second interview selected'),
       ('Third interview selected'),
       ('Fourth interview selected'),
       ('Fifth interview selected'),
       ('Hired'),
       ('Rejected');