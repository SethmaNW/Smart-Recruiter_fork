/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get candidateIds using a given jobId
Changes : 
    2024-08-13 => Created
Example : 

not used
**************************************************************************************************/ 

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetCandidateIdsOfJobId]
    @jobId INT
AS
SELECT candidateId 
FROM [dbo].[comments] 
WHERE [jobId] = @jobId