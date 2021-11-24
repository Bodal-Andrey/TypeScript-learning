import React from 'react';
import { Link } from 'react-router-dom';

interface Ipost {
    title?: string,
    id?: number,
}

type PostState = {
    data: Ipost[],
};

class Posts extends React.Component<{}, PostState> {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => { this.setState({ data }) })
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1>Posts:</h1>
                <ul className="posts">
                    {data.map(({ id, title }: Ipost) =>
                        <li key={id}>
                            <Link to={`posts/${id}`}>{title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};

export default Posts;
