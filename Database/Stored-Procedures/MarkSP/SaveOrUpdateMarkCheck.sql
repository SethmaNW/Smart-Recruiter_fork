USE SmartRecruiterDB;
GO

-- Example values for the parameters
DECLARE @AdminId INT = 1;
DECLARE @JobId INT = 1;
DECLARE @CandidateId INT = 1;
DECLARE @RoleId INT = 1;
DECLARE @Criteria NVARCHAR(50) = 'AttitudeAndDiscipline';
DECLARE @Value INT = 75;


-- Execute the stored procedure
EXEC SaveOrUpdateMark 
    @AdminId = @AdminId,
    @JobId = @JobId,
    @CandidateId = @CandidateId,
    @RoleId = @RoleId,
    @Criteria = @Criteria,
    @Value = @Value;