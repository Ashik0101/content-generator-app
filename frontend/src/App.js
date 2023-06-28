import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setContent("");
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleGenerateClick = () => {
    if (category === "") {
      alert("Please choose a category");
      return;
    }

    if (keyword === "") {
      alert("Please enter a keyword");
      return;
    }
    setIsLoading(true);
    const endpoint = `https://rich-mite-smock.cyclic.app/generate/${category.toLowerCase()}`;

    (async () => {
      axios
        .post(`${endpoint}`, { keyword })
        .then((response) => {
          console.log(response.data.content);
          setContent(response.data.content);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    })();
  };

  return (
    <div className="App">
      <h1 className="heading">Content Generator</h1>
      <div className="form-container">
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Choose Category</option>
          <option value="Poem">Poems</option>
          <option value="Joke">Jokes</option>
          <option value="Quote">Quotes</option>
          <option value="Story">Stories</option>
        </select>
        <input
          type="text"
          placeholder="Enter Keyword"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button onClick={handleGenerateClick}>
          Generate {category !== "" ? category : "Content"}
        </button>
      </div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <h3>Generating {category}...</h3>
        </div>
      ) : (
        content && (
          <div className="content-container">
            <h2>Generated {category} :</h2>
            <pre
              className={`content-wrapper ${
                category === "Story" ? "story" : ""
              }`}
            >
              {content}
            </pre>
          </div>
        )
      )}
    </div>
  );
}

export default App;
