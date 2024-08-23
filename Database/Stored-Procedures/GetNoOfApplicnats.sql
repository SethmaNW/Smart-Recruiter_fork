/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get number of applicants from a given jobId and roleId
Changes : 
    2024-08-23 => Created
Example : 

 
**************************************************************************************************/

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetNoOfApplicnats]
    @jobId INT,
    @roleId INT
AS
BEGIN
    SELECT COUNT(c.[Id])
    FROM [dbo].[candidates] c
    INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id]
    WHERE cj.[JobId] = @jobId AND c.[Role_Id] = @roleId
END