import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch (updateNewMessageActionCreator (body));
        },
        sendMessage: () => {
            dispatch (addMessageActionCreator ());
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;