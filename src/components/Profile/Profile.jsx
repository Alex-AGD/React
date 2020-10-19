import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"

const Profile = (props) => {

    return <div className={s.wrapped}>

        <div className={s.profile}> <ProfileInfo  /> </div>
        <div className={s.posts}><MyPostsContainer store={props.store}/> </div>


    </div>
}

export default Profile;