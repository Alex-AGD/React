const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi how are you?', likes: 1},
                {id: 1, message: 'Alex-Coder', likes: 14},
                {id: 2, message: 'Hi React', likes: 17},
            ],
            sidebar: [
                {id: 0, name: 'Oleg'},
                {id: 1, name: 'Anton'},
                {id: 2, name: 'Artem'},
            ],
            newPostText: 'TestMessage'
        },

        dialogsPage: {
            messages: [
                {id: 0, message: 'Hi'},
                {id: 1, message: 'How are you'},
                {id: 2, message: 'React Yo'},
                {id: 3, message: 'Hi lorem 1'},
                {id: 4, message: 'Hi lorem33'},
                {id: 5, message: 'Hi Hi lorem11'},
            ],
            dialogs: [
                {id: 0, name: 'AlexCoder'},
                {id: 1, name: 'Sereshka'},
                {id: 2, name: 'Vitya'},
                {id: 3, name: 'Yulia'},
                {id: 4, name: 'Anton'},
                {id: 5, name: 'Oleg'}
            ],
            newMessageText: 'TestsMessage'
        },

    },
    _callSubscriber() {
        console.log('State changes');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель publisher
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likes: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({id: 6, message: newMessage});
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})


window.state = store;
export default store