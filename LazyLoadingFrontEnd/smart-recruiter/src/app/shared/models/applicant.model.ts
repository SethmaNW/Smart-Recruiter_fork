export interface Applicant {
    id: number;
    position: string;
    name: string;
    degree: string; 
    contact: string;
    skills: string;
    available_Date: Date;    
    experience: string;
    reason: string;
    comment: string;
    commentEditable: boolean;
    cv: string;
    role_Id: number;
    email: string;
    testmark: number;
    // status: string;
}