USE SmartRecruiterDB;

INSERT INTO [dbo].[marks] 
    ([AttitudeAndDiscipline], [TechnicalKnowledge], [EducationBackground], [ProfessionalQualification], 
     [CarrierBackground], [CommunicationSkills], [CulturalFit], [FamilyBackground], 
     [IQCreativityProblemSolvingSkills], [ManagementSkills], [AdminId], [JobId], [CandidateId], [RoleId])
VALUES
    (8, 9, 7, 6, 5, 8, 7, 6, 9, 7, 1, 1, 1, 0),
    (7, 8, 8, 7, 6, 7, 8, 5, 8, 6, 2, 2, 2, 1),
    (9, 7, 6, 8, 7, 8, 7, 6, 7, 9, 3, 3, 3, 2),
    (6, 5, 7, 6, 5, 7, 6, 8, 6, 7, 1, 2, 1, 3),
    (7, 6, 8, 7, 6, 8, 7, 5, 7, 6, 2, 1, 2, 5),
    (8, 9, 7, 6, 5, 8, 7, 6, 9, 7, 3, 2, 3, 0),
    (7, 8, 8, 7, 6, 7, 8, 5, 8, 6, 1, 3, 1, 1),
    (9, 7, 6, 8, 7, 8, 7, 6, 7, 9, 2, 1, 2, 2),
    (6, 5, 7, 6, 5, 7, 6, 8, 6, 7, 3, 2, 3, 3),
    (7, 6, 8, 7, 6, 8, 7, 5, 7, 6, 1, 3, 1, 4);