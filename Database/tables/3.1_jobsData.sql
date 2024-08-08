USE SmartRecruiterDB;
INSERT INTO [dbo].[jobs] 
    ([Title], [Description], [NoofAvailablePositions], [Location], [Deparment], [ActiveStatus], 
     [AttitudeAndDiscipline], [TechnicalKnowledge], [EducationBackground], [ProfessionalQualification], 
     [CarrierBackground], [CommunicationSkills], [CulturalFit], [FamilyBackground], 
     [IQCreativityProblemSolvingSkills], [ManagementSkills])
VALUES
    ('Software Engineer', 'Develop and maintain software applications.', 5, 'New York', 'IT', 1, 
     8, 9, 7, 6, 5, 8, 7, 6, 9, 7),
    ('Data Analyst', 'Analyze data and generate reports.', 3, 'San Francisco', 'Analytics', 1, 
     7, 8, 8, 7, 6, 7, 8, 5, 8, 6),
    ('Project Manager', 'Manage software development projects.', 2, 'Chicago', 'Management', 1, 
     9, 7, 6, 8, 7, 8, 7, 6, 7, 9),
    ('HR Specialist', 'Handle recruitment and employee relations.', 4, 'Los Angeles', 'HR', 1, 
     6, 5, 7, 6, 5, 7, 6, 8, 6, 7),
    ('Marketing Coordinator', 'Coordinate marketing campaigns and events.', 3, 'Miami', 'Marketing', 1, 
     7, 6, 8, 7, 6, 8, 7, 5, 7, 6);