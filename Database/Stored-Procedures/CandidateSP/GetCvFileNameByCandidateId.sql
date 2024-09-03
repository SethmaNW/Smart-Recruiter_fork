-- USE SmartRecruiterDB;
-- EXEC GetCvFileNameByCandidateId 56;

USE SmartRecruiterDB;
GO

CREATE PROCEDURE GetCvFileNameByCandidateId
    @CandidateId INT
AS
BEGIN
    SELECT CV_FileName
    FROM candidates
    WHERE Id = @CandidateId;
END;