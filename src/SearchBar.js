import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [tags, updateTags] = useState("javascript");

  return (
    <div className="searchbar">
      <form>
        <label htmlFor="note-tags">
          Search By Tag
          <input
            id="search-notes"
            value={tags}
            placeholder="javascript"
            onChange={e => updateTags(e.target.value)}
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
