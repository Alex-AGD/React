import {rerenderEntireTree} from "../render";


let state = {

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
    }

}

window.state = state;


export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state)
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText ='';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state