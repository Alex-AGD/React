import React from "react";
import s from "./Profile.module.css"
import Profile from "./Profile";
import * as axios from "axios";
import connect from "react-redux/lib/connect/connect";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }


        axios.get (`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then (response => {
                this.props.setUserProfile (response.data);
            });
    }

    render () {
        return <div className={ s.wrapped }>
            <Profile { ...this.props } profile={ this.props.profile }/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect (mapStateToProps, {
    setUserProfile
}) (WithUrlDataContainerComponent);