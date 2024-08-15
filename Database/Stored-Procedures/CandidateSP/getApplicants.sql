/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get all applicants from a given candidate id
Changes : 
    2024-08-09 => Created
Example : 

 
 not used yet
**************************************************************************************************/ 

CREATE PROCEDURE [dbo].[getApplicants]
    @CandidateId INT
AS 
BEGIN
    SELECT [Name]
            ,[Contact]
            ,[CV_FilePath]
            ,[CV_FileName]
            ,[Skills]
            ,[Available_Date]
            ,[Degree]
            ,[Experience]
        FROM [dbo].[candidates]
        WHERE [Id] = @CandidateId;

        SELECT [Comment]
        FROM [dbo].[comments]
        WHERE [CandidateId] = @CandidateId;

END