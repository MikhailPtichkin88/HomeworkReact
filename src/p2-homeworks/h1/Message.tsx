import React from 'react'
import {MessageDataType} from "./HW1";
import './Message.css';

function Message(props: MessageDataType) {
    return (
        <div className="message">
            <div className="message__wrapper">
                <img className="message__avatar" src={props.avatar} alt="avatar"/>
                <div className="message__text-inner">
                    <div className="message__author">{props.name}</div>
                    <p className="message__text">{props.message}</p>
                    <span className="message__time">{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
