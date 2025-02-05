import React, { useState } from "react";
import { Article, articles } from "./datasource";
import "./App.css";

// Defining the properties expected by the SearchResults component
interface SearchResultsProps {
  articles: Article[]; // List of articles to be displayed
  searchTerm: string; // The user's search query
}

// Functional component to handle displaying search results on the screen
const SearchResults: React.FC<SearchResultsProps> = ({
  articles,
  searchTerm,
}) => {
  // Function to highlight the search term within the text
  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="results">
      {articles.length === 0 ? (
        <p className="empty-results">No articles found</p>
      ) : (
        articles.map((article) => (
          <article key={article.id} className="article">
            <h2>{highlightText(article.title)}</h2>
            <p>{highlightText(article.excerpt)}</p>
            <time>{article.date}</time>
          </article>
        ))
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchResults articles={filteredArticles} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
