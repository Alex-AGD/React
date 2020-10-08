import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}

                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    )
}