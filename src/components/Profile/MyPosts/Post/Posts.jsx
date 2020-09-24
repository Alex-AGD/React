import React from "react";
import './Posts.module.css';
import p from './Posts.module.css'

const Posts = (props) => {

    return (
        <div className={p.item}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            { props.message }
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Posts;