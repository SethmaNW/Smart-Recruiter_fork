/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get all candidate ids from a given job id
Changes : 
    2024-08-09 => Created
Example : 

 
**************************************************************************************************/

CREATE PROCEDURE [dbo].[getCandidateIdsFromJobId]
    @jobId INT
AS
BEGIN
    SELECT cj.[CandidateID]
    FROM [dbo].[candidates_jobs] cj
    INNER JOIN [dbo].[candidates] c ON cj.[CandidateID] = c.[Id]
    WHERE cj.[JobID] = @jobId
    AND c.[Role_Id] IN (0, 7);

END