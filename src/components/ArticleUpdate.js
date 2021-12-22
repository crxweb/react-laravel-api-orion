import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../axios';


export default class ArticleCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`articles/${this.state.id}`)
            .then(res => {
                this.setState({ title: res.data.data.title });
                this.setState({ content: res.data.data.content });
            })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.put(`articles/${this.state.id}`, {
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
                        Titre:
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Contenu:
                <textarea name="content" value={this.state.content} onChange={this.handleChange} />
                    </label>
                    <button type="submit">Modifier</button>
                </form>
            </div>
        )
    }
}