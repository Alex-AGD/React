import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <div>
                My posts
                <div>
                    <textarea>Text Post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
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