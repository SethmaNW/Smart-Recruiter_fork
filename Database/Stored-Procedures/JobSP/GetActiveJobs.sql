USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetActiveJobs]
AS
BEGIN
    SELECT Id,Title,Description,NoofAvailablePositions,Location,Department FROM [dbo].[jobs] WHERE [ActiveStatus] = 1;
END