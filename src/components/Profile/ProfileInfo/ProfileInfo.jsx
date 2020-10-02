import React from "react";
import s from "./ProfileInfo.module.css"
import TextField from "@material-ui/core/TextField";

const ProfileInfo = (props) => {
    return <div>
        <div>
            <img
                src='https://images.unsplash.com/photo-1452805809447-a55bbdbc76ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'/>
        </div>
        <div className={s.descriptionBlock}>
            Avatar and description
        </div>
    </div>
}

export default ProfileInfo;