import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs}>
            <NavLink to={"/dialogs/" + props.id}>
                <div>
                    <div><img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
                    </div>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;