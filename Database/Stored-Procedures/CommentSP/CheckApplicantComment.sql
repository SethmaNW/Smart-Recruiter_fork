/**************************************************************************************************
Author : Nilakshi Induwara
Usage : check whether the applicant has a comment for a given job
Changes : 
    2024-08-13 => Created
Example : 

not used
**************************************************************************************************/ 

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[CheckApplicantComment]
    @candidateId INT,
    @jobId INT
AS
SELECT CASE
WHEN EXISTS 
( SELECT 1 FROM [dbo].[comments] WHERE [CandidateId] = @candidateId AND [jobId] = @jobId )
THEN CAST (1 AS BIT)
ELSE CAST (0 AS BIT)
END