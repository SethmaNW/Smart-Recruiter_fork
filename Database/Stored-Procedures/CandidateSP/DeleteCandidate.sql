/**************************************************************************************************
Author : Nilakshi Induwara
Usage : delete candidate using candidate id
Changes : 
    2024-08-20 => Created
Example : 

**************************************************************************************************/
USE SmartRecruiterDB;
GO

CREATE PROCEDURE [dbo].[DeleteCandidate]
    @candidateId INT
AS
BEGIN
    DELETE FROM [dbo].[candidates]
    WHERE [Id] = @candidateId
END