/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get shortlisted candidates from a given job id
Changes : 
    2024-08-21 => Created
Example : 

**************************************************************************************************/
USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetShortlistFromJobId]
    @jobId INT
AS 
BEGIN
    SELECT 
    c.[Id], c.[Name], c.[Contact], c.[CV_FilePath], c.[CV_FileName], c.[Role_Id], c.[email]
    FROM [dbo].[candidates] c
    INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id] AND cj.[jobId] = @jobId AND c.[Role_Id] IN (1,2,3,6)
END