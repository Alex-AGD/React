const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: 'Hi how are you?', likes: 1 },
        { id: 1, message: 'Alex-Coder', likes: 14 },
        { id: 2, message: 'Hi React', likes: 17 },
    ],
    newPostText: 'TestMessage'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            return  {
                ...state,
                posts: [ ...state.posts, newPost ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;