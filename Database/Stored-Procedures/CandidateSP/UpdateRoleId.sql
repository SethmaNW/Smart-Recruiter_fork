/**************************************************************************************************
Author : Nilakshi Induwara
Usage : update the role id of a candidate using candidate id
Changes : 
    2024-08-22 => Created
Example : 

**************************************************************************************************/
USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[UpdateRoleId]
    @newRoleId INT,
    @candidateId INT
AS
BEGIN
    UPDATE [dbo].[candidates]
    SET [role_Id] = @newRoleId
    WHERE [Id] = @candidateId
END