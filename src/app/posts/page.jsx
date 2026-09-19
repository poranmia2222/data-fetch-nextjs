import React from 'react';


const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const PostsPage = async () => {
    const data = await getPosts()
    console.log(data)
    return (
        <div>
            <h1>Data length: {data.length}</h1>
        </div>
    );
};

export default PostsPage;