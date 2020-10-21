import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StroreContex";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(addMessageActionCreator());
            }
            let onMessageChange = (body) => {
                store.dispatch(updateNewMessageActionCreator(body))
            }
            return <Dialogs updateNewMessageBody={onMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;