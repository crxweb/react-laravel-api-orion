import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../utils';

axios.defaults.baseURL = process.env.REACT_APP_API_PASSPORT_PATH;

export default class LogoutPassport extends React.Component {


    constructor(props) {
        super(props);
        console.log('logout process');
        logout();
    }

    render() {
        return (
            <div>
            <h1>Déconnection</h1>
          </div>
        )
    }
}