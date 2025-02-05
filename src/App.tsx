import React from "react";
import { Article } from "./datasource.ts";

// Defining the properties expected by the SearchResults component
interface SearchResultsProps {
  articles: Article[]; // List of articles to be displayed
  searchTerm: string; // The user's search query
}

// Functional component to handle displaying search results
const SearchResults: React.FC<SearchResultsProps> = ({
  articles,
  searchTerm,
}) => {
  // Function to highlight the search term within the text
  const highlightText = (text: string) => {
    if (!searchTerm) return text; // If there's no search term, return the original text

    // Splitting the text at occurrences of the search term (case insensitive)
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

    // Mapping each part, highlighting matches
    return parts.map(
      (part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index}>{part}</mark> // Highlight matching parts
        ) : (
          part
        ), // Keep non-matching parts as they are
    );
  };

  return (
    <div className="results">
      {/* If no articles are found, show a friendly message */}
      {articles.length === 0 ? (
        <p className="empty-results">No articles found</p>
      ) : (
        // Display each article with the highlighted search term
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

export default App;
