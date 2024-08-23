/**************************************************************************************************
Author : Nilakshi Induwara
Usage : update candidate comment in applicants table
Changes : 
    2024-08-13 => Created
Example : 

**************************************************************************************************/ 

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[UpdateApplicantComment]
    @candidateId INT,
    @jobId INT,
    @adminId INT,
    @roleId INT,
    @commentText NVARCHAR(MAX)
AS
BEGIN 
    INSERT INTO [dbo].[Comments] ([CandidateId], [jobId], [adminId], [roleId], [Comment])
    VALUES (@candidateId, @jobId, @adminId, @roleId, @commentText )
END