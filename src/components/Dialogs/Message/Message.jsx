import React from "react";
import s from './../Dialogs.module.css'
import {Avatar} from "@material-ui/core";

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>

    )
}

export default Message;