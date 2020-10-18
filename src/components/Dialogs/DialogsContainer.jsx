import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Button from "@material-ui/core/Button";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state} />
    )

}

export default DialogsContainer;