import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../axios';


export default class ArticleCreate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('articles', {
            title: this.state.title,
            content: this.state.content
        })
        .then(function (response) {
            console.log('Seem to be OK');
            console.log(response.data);
            window.location = "/article-detail/" + response.data.data.id;

        })
        .catch(function (error) {
            console.log('axios error');
            console.log(error);

        });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input type="text" name="title" onChange={this.handleChange} />
              </label>
              <label>
                Content:
                <textarea name="content" onChange={this.handleChange} />
              </label>              
              <button type="submit">Add article</button>
            </form>
          </div>
        )
    }
}