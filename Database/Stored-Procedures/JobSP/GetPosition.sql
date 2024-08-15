/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get job position from a given jobId
Changes : 
    2024-08-13 => Created
Example : 

**************************************************************************************************/ 

CREATE PROCEDURE [dbo].[getPosition]
    @jobId INT
BEGIN
    SELECT [Title] FROM [dbo].[jobs] WHERE [Id] = @jobId
END