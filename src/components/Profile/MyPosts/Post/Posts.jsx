import React from "react";
import './Posts.module.css';
import s from './Posts.module.css'
import Avatar from "@material-ui/core/Avatar";

const Posts = (props) => {

    return (
        <div className={s.item}>
            <Avatar alt="Remy Sharp" src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            {props.message}
            <div className={s.likes}>
                <span>Like {props.likes}</span>
            </div>
        </div>
    )
}

export default Posts;