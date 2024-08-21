USE SmartRecruiterDB;
GO
CREATE PROCEDURE [dbo].[GetJobDescriptionByJobId]
    @JobId INT
AS
BEGIN
    SELECT Id, Title, Description, NoofAvailablePositions, Location, Department
    FROM [dbo].[jobs] 
    WHERE Id = @JobId;
END