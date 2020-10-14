import React from "react";
import s from './../Dialogs.module.css'
import Button from "@material-ui/core/Button";


const Message = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.messages}>
                {props.message}
            </div>
        </div>

    )
}

export default Message;