
export const fetchingUsers = (users) => {
    return {type: 'FETCH', payload: users}
}

export const logInSuccessful = ({login, password, isLogged}) => {
    return {type: 'AUTH_LOGIN', payload: {login: login, password: password, isLogged: isLogged}}
}

export const logOut = () => {
    return {type: 'AUTH_LOGOUT'}
}

export const logInFailed = () => {
    return {type: 'AUTH_FAIL'}
}

export const addItem = (item) => {
    return {type: 'ADD', payload: item }
}

export const deleteItem = (items) => {
    return {type: 'DELETE', payload: items }
}
