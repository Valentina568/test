//action-types
import {avatars} from '../props/avatarLets';

const ADD_USER_REGISTRATION = 'ADD_USER_REGISTRATION';
const ADD_USER_NICKNAME = 'ADD_USER_NICKNAME';
const ADD_USER_SURNAME = 'ADD_USER_SURNAME';


let initialState = {
    registration: [
        {id: 1, login: 'admin', password: '12345', avatar: avatars[0]},
        {id: 2, login: 'user', password: '55555', avatar: avatars[1]}
    ],
    user: {},
    userSurname: ''
};

//reducer

export default function ducks(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_REGISTRATION:
            return {...state, registration: action.registration};
        default:
        case ADD_USER_NICKNAME:
            return {...state, user: action.user};
        case ADD_USER_SURNAME:
            return {...state, userSurname: action.userSurname}
    }
}

//actionCreate (AC) (action)
export function addUser(newUserWithoutId) {
    return (dispatch, getState) => {
        let {registration} = getState().ducks;
        newUserWithoutId.id = registration[registration.length - 1].id + 1;
        registration.push(newUserWithoutId);
        dispatch({
            type: ADD_USER_REGISTRATION,
            registration
        })
    }
}

export function addUserNick(user) {
    return dispatch => dispatch({type: ADD_USER_NICKNAME, user})
}

export function userSurname(userSurname) {
    return dispatch => dispatch({type: ADD_USER_SURNAME, userSurname})

}


