import {MessageResponse} from './message';

export interface RollingPaper {
        name:string;
        description:string;
        participantsCount:number;
        messageCount:number;
        openDate:string;
}

export interface PaperListResponse{
    paperCount:number;
    rollingPaper:RollingPaper;
}

export interface PaperRequest{
    name:string;
    description:string;
    openDate:string;
}

export interface PaperResponse{
    name:String;
    description:String;
    openDate:String;
}

export interface JoinPaperRequest{
    invitationCode:String;
}


export interface MessageListResponse{
    messageCount:Number;
    url:String;
    isMaster:Boolean;
    message:MessageResponse[];
}


//? 이름이 같은데?
export interface PaperResponse{
    name:String;
    description:String;
    participantsCount:Number;
    messageCount:String;
    openDate:String;
}