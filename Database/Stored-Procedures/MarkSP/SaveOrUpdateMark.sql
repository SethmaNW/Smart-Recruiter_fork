USE SmartRecruiterDB;

GO

CREATE PROCEDURE SaveOrUpdateMark
    @AdminId INT,
    @JobId INT,
    @CandidateId INT,
    @RoleId INT,
    @Criteria NVARCHAR(100),
    @Value INT
AS
BEGIN
    SET NOCOUNT ON; -- Stop the message indicating the number of rows affected

    -- Check if the row exists
    IF EXISTS (SELECT 1 FROM [dbo].[marks] 
               WHERE [AdminId] = @AdminId 
                 AND [JobId] = @JobId 
                 AND [CandidateId] = @CandidateId
                 AND [RoleId] = @RoleId)
    BEGIN
        -- Construct the dynamic SQL statement for update
        DECLARE @UpdateSQL NVARCHAR(MAX);
        -- N means this is a Unicode string
        SET @UpdateSQL = N'UPDATE [dbo].[marks] SET ' + QUOTENAME(@Criteria) + ' = @Value 
                          WHERE [AdminId] = @AdminId 
                            AND [JobId] = @JobId 
                            AND [CandidateId] = @CandidateId
                            AND [RoleId] = @RoleId';

        -- Execute the dynamic SQL statement for update
        EXEC sp_executesql @UpdateSQL, 
                           N'@Value INT, @AdminId INT, @JobId INT, @CandidateId INT, @RoleId INT', 
                           @Value, @AdminId, @JobId, @CandidateId, @RoleId;
    END
    ELSE
    BEGIN
        -- Construct the dynamic SQL statement for insert
        DECLARE @InsertSQL NVARCHAR(MAX);
        SET @InsertSQL = N'INSERT INTO [dbo].[marks] ([AdminId], [JobId], [CandidateId], [RoleId], ' + QUOTENAME(@Criteria) + ')
                         VALUES (@AdminId, @JobId, @CandidateId, @RoleId, @Value)';

        -- Execute the dynamic SQL statement for insert
        EXEC sp_executesql @InsertSQL, 
                           N'@Value INT, @AdminId INT, @JobId INT, @CandidateId INT, @RoleId INT', 
                           @Value, @AdminId, @JobId, @CandidateId, @RoleId;
    END
END