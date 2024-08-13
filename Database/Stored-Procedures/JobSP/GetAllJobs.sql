USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetAllJobs]
AS
BEGIN
    SELECT * FROM [dbo].[jobs];
END
GO