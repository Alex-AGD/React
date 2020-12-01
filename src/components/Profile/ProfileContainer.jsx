import React from "react";
import s from "./Profile.module.css"
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profileReducer";
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
        this.props.getStatus(userId)

    }

    render () {
        return <div className={ s.wrapped }>
            <Profile { ...this.props }
                     profile={ this.props.profile }
                     status={ this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </div>
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

});

export default compose(
    connect (mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);


/*
//High Order Component (hoc)
let AuthRedirectComponent = withAuthRedirect (ProfileContainer);
let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent);
export default connect (mapStateToProps, { getUserProfile }) (WithUrlDataContainerComponent);*/
