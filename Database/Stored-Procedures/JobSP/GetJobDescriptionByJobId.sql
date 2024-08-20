USE SmartRecruiterDB;
GO
CREATE PROCEDURE [dbo].[GetJobDescriptionByJobId]
    @JobId INT
AS
BEGIN
    SELECT Id,Description FROM [dbo].[jobs] WHERE Id = @JobId;
END