import React from "react";

const NewsFeed = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>No news available.</p>;
  }

  return (
    <div className="snapshotcard">
      <h3>📰 Latest News</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a href={article.link} target="_blank" rel="noopener noreferrer" style={{color:"grey"}}>
              🔗 {article.title}
            </a>
            <br />
            <small>🗓 {new Date(article.pubDate).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
