USE master
GO
IF NOT EXISTS (
   SELECT name
   FROM sys.databases
   WHERE name = 'SmartRecruiterDB'
)
CREATE DATABASE [SmartRecruiterDB]
GO