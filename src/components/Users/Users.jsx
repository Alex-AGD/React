import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";


const AVATAR = 'https://www.joho.se/wp-content/uploads/2017/11/cropped-samurai-ninja-avatar-warrior-icon-1.png';

let Users = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push (i)

    }

    return (
        <div>
            <div>
                { pages.map (p => {
                    return <span className={ props.currentPage === p && styles.selectedPage }
                                 onClick={ (e) => {
                                     props.onPageChanged (p);
                                 } }>{ p }</span>
                }) }
            </div>

            {
                props.users.map (u => <div key={ u.id }>
                <span>
                    <div>
                       <NavLink to={ '/profile/' + u.id }>
                        <img src={ u.photos.small != null ? u.photos.small : AVATAR }
                             className={ styles.userPhoto }/>
                       </NavLink>
                    </div>
                    <div>
                            { u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={ () => {
                                    props.toggleFollowingInProgress(true,u.id)
                                    axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "14b1bb35-f426-48db-9776-5c30a6fd08c2" }
                                    })
                                        .then (response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow (u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id)
                                        });

                                } }>Unfollow</button> :

                                <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={ () => {
                                    props.toggleFollowingInProgress(true,u.id)
                                    axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`,
                                        {}, {
                                            withCredentials: true,
                                            headers: { "API-KEY": "14b1bb35-f426-48db-9776-5c30a6fd08c2" }
                                        })
                                        .then (response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow (u.id)
                                            }
                                            props.toggleFollowingInProgress(false,u.id)
                                        });

                                } }> Follow </button> }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{ u.name }</div>
                        <div>{ u.status }</div>
                        <div>{ u.email }</div>
                    </span>
                    <span>
                        <div>{ "u.location.country" }</div>
                        <div>{ "u.location.city" }</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}
export default Users