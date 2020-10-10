import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem/>
            <Message dialogs={props.messagesPage.messages}
                     addMessage={props.addMessage}
                     newMessageText={props.updateNewMessageText}
                     updateNewTextText={props.updateNewMessageText}/>


        </div>
    )
}

export default Dialogs;