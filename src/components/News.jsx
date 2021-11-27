import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination"
import Post from "./Post"
const News = () => {
  const [articles, setArticles] = useState([]);


  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
  }, [])


  return (

    <MainContainer>

      {articles.length > 0 ? (
        <Pagination
          data={articles}
          RenderComponent={Post}
          title="News"
          pageLimit={4}
          dataLimit={5}

        />
      ) : (
        <h1>No posts to display</h1>

      )}




    </MainContainer>

  )
}

export default News;

const MainContainer = styled.div`



`
