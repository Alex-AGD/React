import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar store={props.store}/>
            <div className='app-wrapper-content'>
                <Route path='/messages'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}


export default App;

{/*<Route path='/messages' component={Dialogs}/>
   <Route path='/profile' component={Profile}/>
   <Route path='/news' component={News}/>
   <Route path='/music' component={Music}/>
   <Route path='/settings' component={Settings}/>*/
}
{/*варинат с component*/
}
{/*<Route path='/settings' component={SomeComponent}/>**/
}
{/*Прокидываем пропсы*/
}