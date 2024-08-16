USE SmartRecruiterDB;
GO

CREATE PROCEDURE GetCandidateById
    @candidateId INT
AS
BEGIN
    SELECT * FROM [dbo].[candidates] WHERE [Id] = @candidateId;
END