import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {

    let posts = [
        {id: 0, message: 'Hi how are you?', likes: 1},
        {id: 1, message: 'Alex-Coder', likes: 14},
        {id: 2, message: 'Hi React', likes: 17},
    ];

    let postElements = posts
        .map(p => <div><Post message={p.message} likes={p.likes} id={p.id}/></div>)

    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea>Text Post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )

}

export default MyPosts;