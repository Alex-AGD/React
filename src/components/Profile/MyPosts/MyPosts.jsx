import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";
import Button from "@material-ui/core/Button";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <div><Post message={p.message} likes={p.likes} id={p.id}/></div>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch( action )
    }
    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <Button variant={"contained"}
                        onClick={addPost}
                        color={"primary"}>Add Post</Button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;