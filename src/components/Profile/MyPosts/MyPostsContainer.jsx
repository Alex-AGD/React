import React from "react";
import './MyPosts.module.css';

import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";
import { addPostActionCreator } from "../../../redux/profileReducer";



let myStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            //let action = updateNewPostActionCreator(text);
            //dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(myStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;