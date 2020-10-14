import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Button from "@material-ui/core/Button";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";



const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch( action )
    }

    return (
        <div className={s.dialogs}>
            <DialogItem />
            <Message  messages={props.dialogsPage.messages}
                      newMessageText={props.dialogsPage.newMessageText}
                      dispatch={props.dispatch}/>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageText}/>
                <div>
                    <Button variant={"contained"}
                            onClick={addMessage}
                            color={"primary"}>Add Post</Button>
                </div>
                <div className={s.messages}>
                {messagesElements}
                </div>
            </div>



        </div>
    )

}

export default Dialogs;