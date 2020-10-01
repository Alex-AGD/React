import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'AlexCoder'},
        {id: 2, name: 'Sereshka'},
        {id: 3, name: 'Vitya'},
        {id: 4, name: 'Yulia'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Oleg'}
    ];

    let messages = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you'},
        {id: 2, message: 'React Yo'},
        {id: 3, message: 'Hi lorem 1'},
        {id: 4, message: 'Hi lorem33'},
        {id: 5, message: 'Hi Hi lorem11'},
    ];

    let messagesElements = messages
        .map(m => <Message message={m.message}/>);

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;