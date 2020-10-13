import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <div><Post message={p.message} likes={p.likes} id={p.id}/></div>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( { type: 'ADD-POST'} );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POS-TEXT', newText: text};
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
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;