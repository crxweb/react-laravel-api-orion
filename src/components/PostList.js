import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_PASSPORT_PATH;

export default class PostList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    
    }

    componentDidMount() {
        var self = this;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_API_PASSPORT_TOKEN_KEY);

        // Gest Post
        axios.get(`posts`)
        .then(res => {
            console.log(res.data);
            const posts = res.data.data;
            self.setState({ posts: posts });
        })        
        .catch(function (response) {
            console.log('Erreur axios get posts');
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h1>Liste des Posts</h1>
                <hr />
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}