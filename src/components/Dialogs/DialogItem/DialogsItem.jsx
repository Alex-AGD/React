import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {AccessAlarm} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs}>
            <NavLink to={"/dialogs/" + props.id}>
                <Avatar alt="Remy Sharp" src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' />
                {props.name}
                </NavLink>
        </div>
    )
}

export default DialogItem;