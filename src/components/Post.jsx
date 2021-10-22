import React from "react"
import styled from "styled-components"

const Post = (props) => {
    const { title, urlToImage, author, description, url } = props.data;
    return (
        <div className="post">
            <h3>{title}</h3>
            <img src={urlToImage} height="230" width="330" />
            <p>{author}</p>
            <p>{description}</p>
            <a className="post-link" href={url}>read more</a>
        </div>
    );
}

export default Post;

