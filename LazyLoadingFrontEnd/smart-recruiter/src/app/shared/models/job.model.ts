export interface Job{
    id? : number;
    title? : string;
    description? : string;
    noOfAvailablePositions?: number;
    location? : string;
    department?: string;
    activeStatus? : boolean;
    attitudeAndDiscipline? : number;
    technicalKnowledge? : number;
    educationBackground? : number;
    professionalQualification? : number;
    careerBackground? : number;
    communicationSkills? : number;
    culturalFit? : number;
    familyBackground? : number;
    iqCreativityProblemSolvingSkills? : number;
    managementSkills? : number;
}