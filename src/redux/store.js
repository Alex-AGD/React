import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi how are you?', likes: 1 },
                { id: 1, message: 'Alex-Coder', likes: 14 },
                { id: 2, message: 'Hi React', likes: 17 },
            ],

            newPostText: 'TestMessage'
        },
        dialogsPage: {
            messages: [
                { id: 0, message: 'Hi' },
                { id: 1, message: 'How are you' },
                { id: 2, message: 'React Yo' },
                { id: 3, message: 'Hi lorem 1' },
                { id: 4, message: 'Hi lorem33' },
                { id: 5, message: 'Hi Hi lorem11' },
            ],
            dialogs: [
                { id: 0, name: 'AlexCoder' },
                { id: 1, name: 'Sereshka' },
                { id: 2, name: 'Vitya' },
                { id: 3, name: 'Yulia' },
                { id: 4, name: 'Anton' },
                { id: 5, name: 'Oleg' }
            ],
            newMessageText: 'TestMessage'
        },
        sidebar: [
            { id: 0, name: 'Oleg' },
            { id: 1, name: 'Anton' },
            { id: 2, name: 'Artem' },
        ],

    },
    _callSubscriber () {
        console.log ('State changes');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель publisher
    },

    dispatch (action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);
        this._callSubscriber (this._state)
    },
}

export default store