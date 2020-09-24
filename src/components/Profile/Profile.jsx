import React from "react";
import './Profile.module.css';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={p.content}>
        <div>
            <img
                src='https://images.unsplash.com/photo-1452805809447-a55bbdbc76ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'/>
        </div>
        <div>
            Avatar and description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;