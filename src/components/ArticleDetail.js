import React from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

export default class ArticleDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        axios.get(`articles/${this.state.id}`)
            .then(res => {
                console.log('dedieu');
                console.log(res);
                console.log(res.data);
                this.setState({ title: res.data.data.title });
                this.setState({ content: res.data.data.content });
            })
    }

    render() {
        return (
            <div>
                <h1>Liste des articles</h1>
                <br />
                <Link to="/article-list/">Retour à la liste</Link>
                <br />
                <Link to={"/article-update/" + this.state.id}>Modifier l'article</Link>    
                <br />
                <Link to={"/article-delete/" + this.state.id}>Supprimer l'article</Link>                                
                <ul>
                    <li>#: <strong>{this.state.id}</strong></li>
                    <li>Titre: <strong>{this.state.title}</strong></li>
                    <li>Contenu: <strong>{this.state.content}</strong></li>
                </ul>
            </div>
        )
    }
}