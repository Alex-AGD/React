import React from "react";
import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch (followAC (userId))
        },
        unfollow: (userId) => {
            dispatch (unfollowAC (userId))
        },
        setUsers: (users) => {
            dispatch (setUsersAC (users))
        }
    }
}


const UserContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;