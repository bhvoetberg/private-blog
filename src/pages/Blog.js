import React from 'react';
import posts from "../data/posts.json";
import {useParams} from "react-router-dom";

function Blog() {
    const {blogId} = useParams()
    const thisPost = posts.find((postId) => {
        return postId.id === blogId;
    })

    return (
        <>
            <div className="blog-page">
                <h2>{thisPost.title}</h2>
                <h3>{thisPost.date}</h3>
                <p>{thisPost.content}</p>
            </div>
        </>
    );
}

export default Blog;