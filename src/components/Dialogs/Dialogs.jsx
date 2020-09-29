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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="AlexCoder" id="1"/>
                <DialogItem name="Sereshka" id="2"/>
                <DialogItem name="Vitya" id="3"/>
                <DialogItem name="Yulia" id="4"/>
                <DialogItem name="Oleg" id="5"/>
                <DialogItem name="Anton" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="React Yo"/>
                <Message message="Hi lorem 15"/>
                <Message message="Hi lorem11"/>
                <Message message="Hi lorem33"/>
            </div>
        </div>
    )
}

export default Dialogs;