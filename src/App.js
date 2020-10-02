import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

let SomeComponent = () => <Dialogs/>

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*                 <Route path='/messages' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                    {/*варинат с component*/}
                    {/*<Route path='/settings' component={SomeComponent}/>**/}

                    {/*Прокидываем пропсы*/}
                    <Route path='/messages' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;

