import React, { useState } from "react";
import "./TeaCategory.css"; // Import the CSS for the tea category

interface TeaCategoryProps {
  name: string;
  description: string;
  imageUrl: string;
}

const TeaCategory: React.FC<TeaCategoryProps> = ({
  name,
  description,
  imageUrl,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div className="tea-category" onClick={handleClick}>
        <img src={imageUrl} alt={name} />
        <div className="tea-category-info">
          <h3>{name}</h3>
        </div>
      </div>
      {isClicked && (
        <div className="focused-card">
          <button onClick={handleClose}>X</button>
          <div className="tea-category">
            <img src={imageUrl} alt={name} />
            <div className="tea-category-info">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeaCategory;
