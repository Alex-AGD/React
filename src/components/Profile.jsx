import React from "react";
import './Profile.module.css';
import p from './Profile.module.css'

const Profile = () => {
    return <div className={p.content}>
        <img src='https://images.unsplash.com/photo-1452805809447-a55bbdbc76ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'/>

        <div className={p.item}>
        <div>My posts<div>
            <div>New Post</div>
        </div>

        <div className={p.item}>
            <div>post 1</div>
            <div>post 2</div>

        </div>
        </div>
        </div>
    </div>

}

export default Profile;