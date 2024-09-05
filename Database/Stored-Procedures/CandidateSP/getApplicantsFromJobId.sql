/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get all applicants from a given job id
Changes : 
    2024-08-09 => Created
Example : 

 
**************************************************************************************************/

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[getApplicantsFromJobId]
    @jobId INT
AS
BEGIN
    SELECT 
        c.[Id], c.[Name], c.[Contact], c.[CV_FilePath], 
        c.[CV_FileName], c.[Skills], c.[Available_Date], 
        c.[Degree], c.[Experience], c.[Reason], c.[Role_Id], com.[Comment] 
    FROM [dbo].[candidates] c
    INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id]
    LEFT JOIN [dbo].[comments] com ON c.[Id] = com.[CandidateId] AND com.[jobId] = @jobId AND com.[roleId] = 0
    WHERE cj.[JobId] = @jobId AND c.[Role_Id] IN (0, 7)
END

-- BEGIN
--     SELECT c.[Name]
--             ,c.[Contact]
--             ,c.[CV_FilePath]
--             ,c.[CV_FileName]
--             ,c.[Skills]
--             ,c.[Available_Date]
--             ,c.[Degree]
--             ,c.[Experience]
--             ,com.[Comment]
--         FROM [dbo].[candidates] c
--         INNER JOIN [dbo].[candidates_jobs] cj ON cj.[CandidateID] = c.[Id]
--         LEFT JOIN [dbo].[comments] com ON c.[Id] = com.[CandidateId]
--         WHERE cj.[JobId] = @jobId
--         AND c.[Role_Id] IN (0, 7)
-- END
