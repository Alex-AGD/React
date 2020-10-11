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
            newMessageText: 'TestMessage'
        },

    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changes');
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель publisher
    },

    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = '';
        this._state._callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._state._callSubscriber(this._state)
    },
}


window.state = store;
export default store