import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {

    let postElements =
        props.posts.map (p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)

    let newPostElement = React.createRef ();

    let onAddPost = () => {
        props.addPost ();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText (text);
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
                        onClick={onAddPost}
                        color={"primary"}>Add Post</Button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;