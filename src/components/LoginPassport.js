import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { login } from '../utils';

axios.defaults.baseURL = process.env.REACT_APP_API_PASSPORT_PATH;

export default class LoginPassport extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        let bodyFormData = new FormData();
        bodyFormData.set('email',this.state.email);
        bodyFormData.set('password', this.state.password);
        var self = this;
        axios({
            method: 'post',
            url: 'login',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                console.log(response.data.token);        
                login(response.data.token);
                window.location = "/post-list";
            })
            .catch(function (response) {
                console.log('Erreur axios login');
                console.log(response);
            });
                    
    }

    render() {
        return (
            <div>
            <h1>Se connecter à Passport</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
              <label>
                Mot de passe:
                <input type="password" name="password" onChange={this.handleChange} />
              </label>              
              <button type="submit">Se connecter</button>
            </form>
          </div>
        )
    }
}