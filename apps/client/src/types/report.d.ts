export interface ReportResponseList{
    messageId:number;
    title:string;
    content:string;
    createdAt:string;
    isAnswered:boolean;
}

export interface ReportRequest{
    messageId:number;
    title:string;
    content:string;
    createdAt:string;
}

export interface ReportResponse{
    messageId:number;
    title:string;
    content:string;
    createdAt:string;
    isAnswered:boolean;
}