import React from 'react';
import './TeaCategory.css'; // Import the CSS for the tea category

interface TeaCategoryProps {
  name: string;
  description: string;
  imageUrl: string;
}

const TeaCategory: React.FC<TeaCategoryProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="tea-category">
      <img src={imageUrl} alt={name} />
      <div className="tea-category-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeaCategory;