import React from "react";
import s from './../Dialogs.module.css'
import Button from "@material-ui/core/Button";
import DialogItem from "../DialogItem/DialogsItem";

const Message = (props) => {

    let messagesElements =
        props.messages.map(m => <Message message={m.names}/>);

/*    let dialogsElements =
        props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);*/

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
                      value={props.newMessageText}/>
            <div>
                <Button variant={"contained"}
                        onClick={addMessage}
                        color={"primary"}>Add Post</Button>
            </div>

            <div className={s.dialogsItems}>
                {messagesElements}
            </div>
            <div className={s.messages}>
                {}
            </div>
        </div>

    )
}

export default Message;