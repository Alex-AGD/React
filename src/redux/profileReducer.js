const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 0, message: 'Hi how are you?', likes: 1 },
        { id: 1, message: 'Alex-Coder', likes: 14 },
        { id: 2, message: 'Hi React', likes: 17 },
    ],
    newPostText: 'TestMessage',
    profile: null
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            return {
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;