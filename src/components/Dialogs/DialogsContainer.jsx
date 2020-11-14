import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

//High Order Component (hoc)
let AuthRedirectComponent = withAuthRedirect (Dialogs);

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;