import React from "react";
import './Posts.module.css';
import s from './Posts.module.css'

const Posts = (props) => {

    return (
        <div className={s.item}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            {props.message}
            <div className={s.likes}>
                <span>Like {props.likes}</span>
            </div>
        </div>
    )
}

export default Posts;