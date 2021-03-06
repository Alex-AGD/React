import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map (d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map (m => <Message message={m.message} key={m.id}/>);
    let newMessagesElements = state.newMessageText;


    let onSendMessageClick = () => {
        props.sendMessage ();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody (body);
    }

    if (!props.isAuth)  return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <DialogItem/>
            <Message/>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessagesElements}
                        onChange={onMessageChange}
                        placeholder='Enter your message'> </textarea></div>
                    <div><Button variant={"contained"}
                                 onClick={onSendMessageClick}
                                 color={"primary"}>Add Post
                    </Button></div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;