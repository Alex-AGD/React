import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {

    let postsData = [
        {id: 0, message: 'Hi how are you?', likes: 1},
        {id: 1, message: 'Alex-Coder', likes: 14},
        {id: 2, message: 'Hi React', likes: 17}
    ];

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
                <div><Post message={postsData[0].message} likes={postsData[0].likes} id={postsData[0].id}/></div>
                <div><Post message={postsData[1].message} likes={postsData[1].likes} id={postsData[1].id}/></div>
                <div><Post message={postsData[2].message} likes={postsData[2].likes} id={postsData[2].id}/></div>
            </div>
        </div>
    )

}

export default MyPosts;