import React from "react";
import Article from "../components/Article";

const Blog = () => {
  return (
    <>
      <section className="blogs">
        <h1>Latest Articles</h1>
        <div className="article-container">
          <Article />
        </div>
      </section>
    </>
  );
};

export default Blog;
