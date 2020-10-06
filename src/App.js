import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.profilePage}/>
            <div className='app-wrapper-content'>
                {/*                 <Route path='/messages' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                {/*варинат с component*/}
                {/*<Route path='/settings' component={SomeComponent}/>**/}

                {/*Прокидываем пропсы*/}
                <Route path='/messages'
                       render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                <Route path='/profile'
                       render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} />}/>
                <Route path='/news' render={ () => <News/>}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
            </div>
        </div>

    )

}


export default App;

