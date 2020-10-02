import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 0, message: 'Hi how are you?', likes: 1},
    {id: 1, message: 'Alex-Coder', likes: 14},
    {id: 2, message: 'Hi React', likes: 17},
];

let dialogs = [
    {id: 1, name: 'AlexCoder'},
    {id: 2, name: 'Sereshka'},
    {id: 3, name: 'Vitya'},
    {id: 4, name: 'Yulia'},
    {id: 5, name: 'Anton'},
    {id: 6, name: 'Oleg'}
];

let messages = [
    {id: 0, message: 'Hi'},
    {id: 1, message: 'How are you'},
    {id: 2, message: 'React Yo'},
    {id: 3, message: 'Hi lorem 1'},
    {id: 4, message: 'Hi lorem33'},
    {id: 5, message: 'Hi Hi lorem11'},
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
