import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
}

function PostList(props) {
    const { posts } = props;
    return (
        <div className='container'>
            <h1>React hook - PostList</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;