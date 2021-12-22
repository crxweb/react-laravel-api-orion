import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../axios';
import { Link } from 'react-router-dom';



export default class ArticleDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        axios.get(`articles/${this.state.id}`)
            .then(res => {
                this.setState({ title: res.data.data.title });
                this.setState({ content: res.data.data.content });
            })
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`articles/${this.state.id}`)

        .then(function (response) {
            console.log('Seem to be OK');
            console.log(response.data);
            window.location = "/article-list";
        })
        .catch(function (error) {
            console.log('axios error');
            console.log(error);

        });
    }


    render() {
        return (
            <div>
                <h1>Supprimer un article</h1>
                <br />
                <Link to="/article-list/">Retour à la liste</Link>
                <p>Etes-vous certain de vouloir supprimer cet article?</p>
                <ul>
                    <li>#: <strong>{this.state.id}</strong></li>
                    <li>Titre: <strong>{this.state.title}</strong></li>
                    <li>Contenu: <strong>{this.state.content}</strong></li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Supprimer</button>
                </form>
            </div>
        )
    }
}