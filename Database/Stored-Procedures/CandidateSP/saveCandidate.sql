USE SmartRecruiterDB;
GO

CREATE PROCEDURE SaveCandidate
    @Name NVARCHAR(255),
    @Contact NVARCHAR(50),
    @Email NVARCHAR(128),
    @CV_FilePath NVARCHAR(255),
    @CV_FileName NVARCHAR(255),
    @Skills NVARCHAR(300),
    @Available_Date DATETIME,
    @GitHub_Link NVARCHAR(255),
    @LinkedIn NVARCHAR(255),
    @Degree NVARCHAR(255),
    @University NVARCHAR(255),
    @Reason NVARCHAR(500),
    @Experience NVARCHAR(500),
    @Role_Id INT,
    @jobId INT,
    @Id INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        BEGIN TRANSACTION;

        INSERT INTO Candidates (Name, Contact, Email, CV_FilePath, CV_FileName, Skills, Available_Date, GitHub_Link, LinkedIn, Degree, University, Reason, Experience, Role_Id) 
        VALUES (@Name, @Contact, @Email, @CV_FilePath, @CV_FileName, @Skills, @Available_Date, @GitHub_Link, @LinkedIn, @Degree, @University, @Reason, @Experience, @Role_Id); 

        SET @Id = SCOPE_IDENTITY();

        INSERT INTO candidates_jobs (CandidateID, JobID) VALUES (@Id, @JobId);

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END