import React from "react";
import s from './../Dialogs.module.css'
import Button from "@material-ui/core/Button";

const Message = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.dialog}>
            <textarea ref={newPostElement}/>
            <div>
                <Button variant={"contained"}
                        onClick={addPost}
                        color={"primary"}>Add Post</Button>
            </div>
            <div>
                {props.message}
            </div>
        </div>

    )
}

export default Message;