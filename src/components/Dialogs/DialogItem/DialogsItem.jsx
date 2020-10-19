import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs}>
            <NavLink to={"/dialogs/" + props.id}>
                <div>
                    {props.name}
                 </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;