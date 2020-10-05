import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Avatar} from "@material-ui/core";


const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <DialogItem />
            <Message />

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;