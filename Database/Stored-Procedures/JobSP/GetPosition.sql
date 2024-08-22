/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get job position from a given jobId
Changes : 
    2024-08-13 => Created
Example : 

**************************************************************************************************/ 

USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[getPosition]
    @jobId INT
AS
BEGIN
    SELECT [Title] FROM [dbo].[jobs] WHERE [Id] = @jobId
END
GO