export interface CreateMessageRequest{
    receiverId:number;
    content:string;
    from:string;
    fontStyle:string;
    backGroundColor:string;
}

export interface MessageResponse{
    toOrFrom:string;
    content:string;
    name:string;
    createdAt:string;
}

export interface MessageRequest{
    messageId:number;
    content:string;
    from:String;
}
