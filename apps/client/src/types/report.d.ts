export interface ReportResponseList{
    messageId:Number;
    title:String;
    content:String;
    createdAt:String;
    isAnswered:Boolean;
}

export interface ReportRequest{
    messageId:Number;
    title:String;
    content:String;
    createdAt:String;
}

export interface ReportResponse{
    messageId:Number;
    title:String;
    content:String;
    createdAt:String;
    isAnswered:Boolean;
}