USE SmartRecruiterDB;
GO

CREATE PROCEDURE CalculateMarks
    @CandidateId INT,
    @JobId INT,
    @RoleId INT,
    @FinalScore DECIMAL(18, 5) OUTPUT,
    @TotalMark DECIMAL(18, 5) OUTPUT,

    @AttitudeAndDisciplineParticipation DECIMAL(18, 5) OUTPUT,
    @TechnicalKnowledgeParticipation DECIMAL(18, 5) OUTPUT,
    @EducationBackgroundParticipation DECIMAL(18, 5) OUTPUT,
    @ProfessionalQualificationParticipation DECIMAL(18, 5) OUTPUT,
    @CareerBackgroundParticipation DECIMAL(18, 5) OUTPUT,
    @CommunicationSkillsParticipation DECIMAL(18, 5) OUTPUT,
    @CulturalFitParticipation DECIMAL(18, 5) OUTPUT,
    @FamilyBackgroundParticipation DECIMAL(18, 5) OUTPUT,
    @IQCreativityProblemSolvingSkillsParticipation DECIMAL(18, 5) OUTPUT,
    @ManagementSkillsParticipation DECIMAL(18, 5) OUTPUT
AS

BEGIN
    -- Declare a table variable to store marks
    DECLARE @Marks TABLE (
        Id INT,
        AttitudeAndDiscipline INT,
        TechnicalKnowledge INT,
        EducationBackground INT,
        ProfessionalQualification INT,
        CareerBackground INT,
        CommunicationSkills INT,
        CulturalFit INT,
        FamilyBackground INT,
        IQCreativityProblemSolvingSkills INT,
        ManagementSkills INT,
        AdminId INT
    );

    -- Insert the result of the query into the table variable
    INSERT INTO @Marks
    SELECT Id, AttitudeAndDiscipline, TechnicalKnowledge, EducationBackground, ProfessionalQualification, CareerBackground, 
           CommunicationSkills, CulturalFit, FamilyBackground, IQCreativityProblemSolvingSkills, ManagementSkills, 
           AdminId
    FROM [dbo].[marks]
    WHERE [JObId] = @JobId AND [CandidateId] = @CandidateId AND [RoleId] = @RoleId;

   -- Declare variables to store job criteria weights
    DECLARE @AttitudeAndDisciplineWeight INT,
            @TechnicalKnowledgeWeight INT,
            @EducationBackgroundWeight INT,
            @ProfessionalQualificationWeight INT,
            @CareerBackgroundWeight INT,
            @CommunicationSkillsWeight INT,
            @CulturalFitWeight INT,
            @FamilyBackgroundWeight INT,
            @IQCreativityProblemSolvingSkillsWeight INT,
            @ManagementSkillsWeight INT;

    -- Select the weights into the variables
    SELECT @AttitudeAndDisciplineWeight = AttitudeAndDiscipline,
           @TechnicalKnowledgeWeight = TechnicalKnowledge,
           @EducationBackgroundWeight = EducationBackground,
           @ProfessionalQualificationWeight = ProfessionalQualification,
           @CareerBackgroundWeight = CareerBackground,
           @CommunicationSkillsWeight = CommunicationSkills,
           @CulturalFitWeight = CulturalFit,
           @FamilyBackgroundWeight = FamilyBackground,
           @IQCreativityProblemSolvingSkillsWeight = IQCreativityProblemSolvingSkills,
           @ManagementSkillsWeight = ManagementSkills
    FROM [dbo].[jobs]
    WHERE [Id] = @JobId;

    Declare @TotalWeightedSum DECIMAL(18, 5),
            @AdminCount DECIMAL(18, 5);

    -- Calculate the number of admins (rows) | when one admin save 2 mark rows it counts as two admins
    SELECT @AdminCount = COUNT(*)
    FROM [dbo].[marks]
    WHERE JobId = @JobId AND CandidateId = @CandidateId AND RoleId = @RoleId;

    -- Calculate the weighted average for each row and sum them
    SELECT @TotalWeightedSum = SUM(
        (
            ISNULL(CAST(AttitudeAndDiscipline * @AttitudeAndDisciplineWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(TechnicalKnowledge * @TechnicalKnowledgeWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(EducationBackground * @EducationBackgroundWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(ProfessionalQualification * @ProfessionalQualificationWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(CareerBackground * @CareerBackgroundWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(CommunicationSkills * @CommunicationSkillsWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(CulturalFit * @CulturalFitWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(FamilyBackground * @FamilyBackgroundWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(IQCreativityProblemSolvingSkills * @IQCreativityProblemSolvingSkillsWeight AS DECIMAL(18, 5)), 0) +
            ISNULL(CAST(ManagementSkills * @ManagementSkillsWeight AS DECIMAL(18, 5)), 0)
        ) / NULLIF(
            CASE WHEN AttitudeAndDiscipline <> 0 THEN @AttitudeAndDisciplineWeight ELSE 0 END +
            CASE WHEN TechnicalKnowledge <> 0 THEN @TechnicalKnowledgeWeight ELSE 0 END +
            CASE WHEN EducationBackground <> 0 THEN @EducationBackgroundWeight ELSE 0 END +
            CASE WHEN ProfessionalQualification <> 0 THEN @ProfessionalQualificationWeight ELSE 0 END +
            CASE WHEN CareerBackground <> 0 THEN @CareerBackgroundWeight ELSE 0 END +
            CASE WHEN CommunicationSkills <> 0 THEN @CommunicationSkillsWeight ELSE 0 END +
            CASE WHEN CulturalFit <> 0 THEN @CulturalFitWeight ELSE 0 END +
            CASE WHEN FamilyBackground <> 0 THEN @FamilyBackgroundWeight ELSE 0 END +
            CASE WHEN IQCreativityProblemSolvingSkills <> 0 THEN @IQCreativityProblemSolvingSkillsWeight ELSE 0 END +
            CASE WHEN ManagementSkills <> 0 THEN @ManagementSkillsWeight ELSE 0 END, 0)
    )
    FROM [dbo].[marks]
    WHERE JobId = @JobId AND CandidateId = @CandidateId AND RoleId = @RoleId;

    -- Calculate the final weighted average
    SET @FinalScore = @TotalWeightedSum / NULLIF(@AdminCount, 0);

    -- Calculate participation of each criteria for total mark
    -- Calculate total weighted sum and count of non-zero marks
    SELECT @TotalMark = SUM(
        CASE WHEN m.AttitudeAndDiscipline <> 0 THEN m.AttitudeAndDiscipline * @AttitudeAndDisciplineWeight ELSE 0 END +
        CASE WHEN m.TechnicalKnowledge <> 0 THEN m.TechnicalKnowledge * @TechnicalKnowledgeWeight ELSE 0 END +
        CASE WHEN m.EducationBackground <> 0 THEN m.EducationBackground * @EducationBackgroundWeight ELSE 0 END +
        CASE WHEN m.ProfessionalQualification <> 0 THEN m.ProfessionalQualification * @ProfessionalQualificationWeight ELSE 0 END +
        CASE WHEN m.CareerBackground <> 0 THEN m.CareerBackground * @CareerBackgroundWeight ELSE 0 END +
        CASE WHEN m.CommunicationSkills <> 0 THEN m.CommunicationSkills * @CommunicationSkillsWeight ELSE 0 END +
        CASE WHEN m.CulturalFit <> 0 THEN m.CulturalFit * @CulturalFitWeight ELSE 0 END +
        CASE WHEN m.FamilyBackground <> 0 THEN m.FamilyBackground * @FamilyBackgroundWeight ELSE 0 END +
        CASE WHEN m.IQCreativityProblemSolvingSkills <> 0 THEN m.IQCreativityProblemSolvingSkills * @IQCreativityProblemSolvingSkillsWeight ELSE 0 END +
        CASE WHEN m.ManagementSkills <> 0 THEN m.ManagementSkills * @ManagementSkillsWeight ELSE 0 END
    )
    FROM [dbo].[marks] m
    WHERE m.JobId = @JobId AND m.CandidateId = @CandidateId AND m.RoleId = @RoleId;

    -- Store mark for each criteria
    DECLARE @TotalAttitudeAndDiscipline DECIMAL(18, 5),
            @TotalTechnicalKnowledge DECIMAL(18, 5),
            @TotalEducationBackground DECIMAL(18, 5),
            @TotalProfessionalQualification DECIMAL(18, 5),
            @TotalCareerBackground DECIMAL(18, 5),
            @TotalCommunicationSkills DECIMAL(18, 5),
            @TotalCulturalFit DECIMAL(18, 5),
            @TotalFamilyBackground DECIMAL(18, 5),
            @TotalIQCreativityProblemSolvingSkills DECIMAL(18, 5),
            @TotalManagementSkills DECIMAL(18, 5);

    SELECT  @TotalAttitudeAndDiscipline = SUM(CASE WHEN m.AttitudeAndDiscipline <> 0 THEN m.AttitudeAndDiscipline ELSE 0 END),
            @TotalTechnicalKnowledge = SUM(CASE WHEN m.TechnicalKnowledge <> 0 THEN m.TechnicalKnowledge ELSE 0 END),
            @TotalEducationBackground = SUM(CASE WHEN m.EducationBackground <> 0 THEN m.EducationBackground ELSE 0 END),
            @TotalProfessionalQualification = SUM(CASE WHEN m.ProfessionalQualification <> 0 THEN m.ProfessionalQualification ELSE 0 END),
            @TotalCareerBackground = SUM(CASE WHEN m.CareerBackground <> 0 THEN m.CareerBackground ELSE 0 END),
            @TotalCommunicationSkills = SUM(CASE WHEN m.CommunicationSkills <> 0 THEN m.CommunicationSkills ELSE 0 END),
            @TotalCulturalFit = SUM(CASE WHEN m.CulturalFit <> 0 THEN m.CulturalFit ELSE 0 END),
            @TotalFamilyBackground = SUM(CASE WHEN m.FamilyBackground <> 0 THEN m.FamilyBackground ELSE 0 END),
            @TotalIQCreativityProblemSolvingSkills = SUM(CASE WHEN m.IQCreativityProblemSolvingSkills <> 0 THEN m.IQCreativityProblemSolvingSkills ELSE 0 END),
            @TotalManagementSkills = SUM(CASE WHEN m.ManagementSkills <> 0 THEN m.ManagementSkills ELSE 0 END)
    FROM [dbo].[marks] m
    WHERE m.JobId = @JobId AND m.CandidateId = @CandidateId AND m.RoleId = @RoleId;

    -- Calculate participation percentages for each criterion
    SELECT @AttitudeAndDisciplineParticipation = 
           (@TotalAttitudeAndDiscipline * @AttitudeAndDisciplineWeight) / @TotalMark,
           @TechnicalKnowledgeParticipation = 
           (@TotalTechnicalKnowledge * @TechnicalKnowledgeWeight) / @TotalMark,
           @EducationBackgroundParticipation = 
           (@TotalEducationBackground * @EducationBackgroundWeight) / @TotalMark,
           @ProfessionalQualificationParticipation = 
           (@TotalProfessionalQualification * @ProfessionalQualificationWeight) / @TotalMark,
           @CareerBackgroundParticipation = 
           (@TotalCareerBackground * @CareerBackgroundWeight) / @TotalMark,
           @CommunicationSkillsParticipation = 
           (@TotalCommunicationSkills * @CommunicationSkillsWeight) / @TotalMark,
           @CulturalFitParticipation = 
           (@TotalCulturalFit * @CulturalFitWeight) / @TotalMark,
           @FamilyBackgroundParticipation = 
           (@TotalFamilyBackground * @FamilyBackgroundWeight) / @TotalMark,
           @IQCreativityProblemSolvingSkillsParticipation = 
           (@TotalIQCreativityProblemSolvingSkills * @IQCreativityProblemSolvingSkillsWeight) / @TotalMark,
           @ManagementSkillsParticipation = 
           (@TotalManagementSkills * @ManagementSkillsWeight) / @TotalMark
    FROM [dbo].[marks] m
    WHERE m.JobId = @JobId AND m.CandidateId = @CandidateId AND m.RoleId = @RoleId;
     
END