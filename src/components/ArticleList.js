import React from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

export default class ArticleList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(`articles`)
            .then(res => {
                const articles = res.data.data;
                this.setState({ articles });
                console.log(articles);
            })
    }

    render() {
        return (
            <div>
                <h1>Liste des articles</h1>
                <br />
                <Link to="/article-create/">Ajouter un article</Link>
                <hr />
                <ul>
                    {this.state.articles.map(article =>
                        <li key={article.id}>
                            <Link to={"/article-detail/" + article.id}>#{article.id} - {article.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}