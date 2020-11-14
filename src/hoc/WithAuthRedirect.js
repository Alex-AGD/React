import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import connect from "react-redux/lib/connect/connect";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if ( !this.props.isAuth) return <Redirect to='/login'/>
            return <Component { ...this.props }/>;
        }
    }

    //Double connect for two hoc
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}