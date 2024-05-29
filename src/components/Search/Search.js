import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AppContext } from "../../App";
import "./Search.css"; // Ensure to create appropriate styles

export default function Search() {
  const { products, setSearchResults } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setSearchResults(results);
    navigate("/search-results"); // Navigate to search results page
  }

  return (
    <div className="Search">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
}
