import React from "react";
import s from './../Dialogs.module.css'
import Button from "@material-ui/core/Button";

const Message = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialog}>
            <textarea onChange={onMessageChange}
                      ref={newMessageElement}
                      value={props.newMessageText} />
            <div>
                <Button variant={"contained"}
                        onClick={addMessage}
                        color={"primary"}>Add Post</Button>
            </div>
        </div>

    )
}

export default Message;