import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar store={ props.store }/>
            <div className='app-wrapper-content'>
                <Route path='/messages' render={ () => <DialogsContainer/> }/>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                <Route path='/news' render={ () => <News/> }/>
                <Route path='/music' render={ () => <Music/> }/>
                <Route path='/settings' render={ () => <Settings/> }/>
                <Route path='/users' render={ () => <UserContainer/> }/>
                <Route path='/login' render={ () => <LoginPage /> }/>
            </div>
        </div>
    )

}



export default App;
