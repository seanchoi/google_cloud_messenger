import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import './SidebarChat.css';
import db from './firebase'
import { setChat } from "./features/chatSlice";
import * as timeago from 'timeago.js'


function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);
    
    useEffect(()=> {
        db.collection('chats')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=> 
            setChatInfo(snapshot.docs.map((doc)=> doc.data()))
        )
    }, [id])

    return (
        <div onClick={() =>
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,                
                })
            )
        }
        className="sidebarChat">
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message.substring(0,30)}</p>
                <small>
                    {timeago.format(
                    new Date(chatInfo[0]?.timestamp?.toDate())    
                    )}
                </small>
            </div>
        </div>
    )
}

export default SidebarChat
