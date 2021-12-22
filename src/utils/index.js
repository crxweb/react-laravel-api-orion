const TOKEN_KEY = process.env.REACT_APP_API_PASSPORT_TOKEN_KEY;

export const login = (bearer_token) => {
   // localStorage.setItem(TOKEN_KEY, 'TestLogin');
   localStorage.setItem(TOKEN_KEY, bearer_token);
}

export const logout = () => {
    console.log('remove item ', TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
    window.location = process.env.REACT_APP_DEFAULT_ROUTE;
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}