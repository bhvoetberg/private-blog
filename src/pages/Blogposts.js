import React from 'react';
import posts from '../data/posts.json'
import {Link} from "react-router-dom";

function Blogposts() {
    let postsArray = [];
    for (let i in posts) postsArray.push(posts[i]);
    let numberOfBlogPosts = postsArray.length;

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h1>Welkom op een fantastisch blogplatform</h1>
            <h2>Aantal blogposts: {numberOfBlogPosts}</h2>
            <ul>
                {postsArray.map((list) => {
                    return <li key={list.id}>
                        <Link to={`/blog/${list.id}`}>
                            {list.title}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Blogposts;

