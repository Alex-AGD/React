const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
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
}


export const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        //messages: [ ...state.messages ]
    };
    stateCopy.messages = [ ...state.messages ]


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newMessageText
            return stateCopy;
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            stateCopy.newMessageText = '';
            stateCopy.messages.push ({ id: 6, message: newMessage });
            return stateCopy;
        default:
            return state;
    }

}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })

export default dialogsReducer;