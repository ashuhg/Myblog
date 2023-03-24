import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Categories
      </button>
      <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        <button
          className={`dropdown-item ${
            selectedOption === "technology" ? "active" : ""
          }`}
          value="technology"
          onClick={handleOptionChange}
        >
          Technology
        </button>
        <button
          className={`dropdown-item ${
            selectedOption === "sports" ? "active" : ""
          }`}
          value="sports"
          onClick={handleOptionChange}
        >
          Sports
        </button>
        <button
          className={`dropdown-item ${
            selectedOption === "politics" ? "active" : ""
          }`}
          value="politics"
          onClick={handleOptionChange}
        >
          Politics
        </button>
        <button
          className={`dropdown-item ${
            selectedOption === "entertainment" ? "active" : ""
          }`}
          value="entertainment"
          onClick={handleOptionChange}
        >
          Entertainment
        </button>
      </div>
      {selectedOption && (
        <Link to={`/blog/${selectedOption}`} className="btn btn-primary ml-2">
          Filter
        </Link>
      )}
    </div>
  );
};

export default CategoriesDropDown;