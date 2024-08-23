/**************************************************************************************************
Author : Nilakshi Induwara
Usage : get Admin Id from Admin email
Changes : 
    2024-08-21 => Created
Example : 

**************************************************************************************************/
USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[GetAdminEmail]
    @email NVARCHAR(50)
AS
BEGIN
SELECT Id FROM [dbo].[admins] WHERE [email] = @email
END