import React from "react";
import styles from './Users.module.css'

const AVATAR = 'https://www.joho.se/wp-content/uploads/2017/11/cropped-samurai-ninja-avatar-warrior-icon-1.png';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers ([
                {
                    id: 1,
                    photoURL: AVATAR,
                    followed: false,
                    fullName: 'Alex',
                    status: 'Boss',
                    location: { city: 'Gomel', country: 'Belarus' }
                },
                {
                    id: 2,
                    photoURL: AVATAR,
                    followed: true,
                    fullName: 'Jim',
                    status: 'User',
                    location: { city: 'Kiev', country: 'Ukraine' }
                },
                {
                    id: 3,
                    photoURL: AVATAR,
                    followed: true,
                    fullName: 'Janet',
                    status: 'User',
                    location: { city: 'Idaho', country: 'USA' }
                }
            ]
        )
    }

    return <div>
        {
            props.users.map (u => <div key={ u.id }>
                <span>
                    <div>
                        <img src={ u.photoURL } className={ styles.userPhoto }/>
                    </div>
                    <div>
                            { u.followed ?
                                <button onClick={ () => props.unfollow (u.id) }>Unfollow</button> :
                                <button onClick={ () => props.follow (u.id) }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{ u.fullName }</div>
                        <div>{ u.status }</div>
                    </span>
                    <span>
                 {/*       <div>{ u.location.country }</div>
                        <div>{ u.location.city }</div>*/}
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users