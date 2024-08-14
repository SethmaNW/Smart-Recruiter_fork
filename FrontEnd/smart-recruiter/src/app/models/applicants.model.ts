export interface Applicant {
    id: number;
    position: string;
    name: string;
    degree: string; 
    contact: string;
    skills: string;
    available_Date: Date;    
    experience: string;
    comment: string;
    commentEditable: boolean;
    // cv: string;
    // status: string;
}