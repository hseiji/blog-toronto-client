import React from 'react';
import { Link } from 'react-router-dom';
import "./singlepost.css";

//SinglePost is a summary of the post in the Home page
export default function SinglePost({ post }) {
    const PF = "http://localhost:8000/images/";
    
    return (
        <div className="singlepost">
            <Link to={`/posts/${post._id}`}>
                {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}
            </Link>
            <div className="postInfo">
                <div className="postCategories">
                    {/* {(post.categories).forEach(element => {
                       return <span className="postCat">{element}</span>
                    })} */}                  
                    {post.categories.map((c) => (
                        <Link to={`/?cat=${c}`} className="link">
                            <span className="postCat">{c}</span>
                        </Link>
                    ))}
                </div>
                <Link to={`/posts/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    )
}
