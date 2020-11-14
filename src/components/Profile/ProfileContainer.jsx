import React from "react";
import s from "./Profile.module.css"
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import { getUserProfile } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if ( !userId) {
            userId = 2;
        }
        this.props.getUserProfile (userId);

    }

    render () {
        return <div className={ s.wrapped }>
            <Profile { ...this.props } profile={ this.props.profile }/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

//High Order Component (hoc)
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent);

export default connect (mapStateToProps, {
    getUserProfile
}) (WithUrlDataContainerComponent);