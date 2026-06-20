import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json()
            if (data && data.length)
                setPosts(data);
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Fetch Data Component Start Here</h1>
            {/* {data.map(post => (
                <div key={post.id}>
                    <li>User ID: {post.userId} ---- Post Title: {post.title}</li>
                </div>
            ))} */}
            {posts.length > 0 ?
                <div>
                    <h2>First Post Title</h2>
                    <p>{posts[0].title}</p>
                </div>
                : ""}
        </div>
    )
}

export default FetchDataEffect
