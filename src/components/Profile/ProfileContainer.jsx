import React from "react";
import s from "./Profile.module.css"
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

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
});

export default compose(
    connect (mapStateToProps, { getUserProfile }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);


/*
//High Order Component (hoc)
let AuthRedirectComponent = withAuthRedirect (ProfileContainer);
let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent);
export default connect (mapStateToProps, { getUserProfile }) (WithUrlDataContainerComponent);*/
