import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={s.post}>
            <div>
                My posts
                <textarea>Text Post</textarea>
                <button>Add post</button>
                <button>Remove Post</button>
            </div>
            <div className={s.post}>
                <div>
                    <Post message='Hi React' likes='10' disLike='1'/>
                </div>
                <div>
                    <Post message='Alex-Coder' likes='151' disLike='0'/>
                </div>
                <Post message='Hi" how are you?' like='100' disLike='12'/>
            </div>

        </div>
    )

}

export default MyPosts;