'use client';

import { useEffect, useState } from "react";


interface Props {
    paperId: string;
    messageId?: string;
}

const MessageEditContainer:React.FC<Props> = ({paperId, messageId}) => {
    const [messageData, setMessageData] = useState(null);
    
    useEffect(() => {
        if(messageId) {

        }
    }, [messageId])

    return (

    )
}