import React from "react"
import styled from "styled-components"

const Post = (props) => {
    const { title, urlToImage, author, description, url } = props.data;
    return (
        <div className="post">
            <img src={urlToImage} height="430" width="auto" />

            <a className="post-link" href={url}><h3>{title}</h3></a>
            <p>{description}</p>
        </div>
    );
}

export default Post;
