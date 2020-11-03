import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"

const Profile = (props) => {

    return <div className={s.wrapped}>

        <div className={s.profile}> <ProfileInfo profile={props.profile} /></div>
        <div className={s.posts}> <MyPostsContainer /></div>


    </div>
}

export default Profile;