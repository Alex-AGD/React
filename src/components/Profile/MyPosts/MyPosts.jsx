import React from "react";
import './MyPosts.module.css';
import p from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={p.post}>
            <div>
            My posts
            <textarea>Text Post</textarea>
            <button>Add post</button>
            <button>Remove Post</button>
            </div>
            <div className={p.post}>
                <div>
                <Post message='Hi React' like='10'/>
                </div>
                <div>
                <Post message='Fist posts' like='15'/>
                </div>
                <Post message='Hi" how are you?' like='-100'/>
            </div>

        </div>
    )

}

export default MyPosts;