import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"

const Profile = (props) => {

    return <div>

        <div className={s.layer1}> <ProfileInfo  /> </div>
        <div className={s.layer2}><MyPostsContainer store={props.store}/> </div>

    </div>
}

export default Profile;