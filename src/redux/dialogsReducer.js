const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-MESSAGE';

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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           return {
                ...state,
                newMessageText: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageText;
             return {
                ...state,
                newMessageText: '',
                messages: [ ...state.messages, { id: 6, message: body } ]
            };
        default:
            return state;
    }

}
export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;