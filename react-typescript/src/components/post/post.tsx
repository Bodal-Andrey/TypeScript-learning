import React from 'react';
import { RouteComponentProps } from 'react-router';

type RouteParams = {
    id: string
};

interface IPost {
    title?: string,
    body?: string,
}

type PostState = {
    post: IPost
};

class Post extends React.Component<RouteComponentProps<RouteParams>, PostState> {
    state = {
        post: {
            title: '',
            body: '',
        },
    };

    componentDidMount() {
        const id = this.props.match.params.id || '';
console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => { this.setState({ post }) })
    }

    render() {
        const { post } = this.state;
        const { title, body } = post;
console.log(post)
        return (
            <section>
                <h1>Post</h1>
                <article>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </article>
            </section>
        );
    }
};

export default Post;