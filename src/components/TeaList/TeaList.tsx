import React from 'react';
import TeaCategory from '../TeaCategory/TeaCategory';
import './TeaList.css'; // Import the CSS for the tea list
import placeholder from '../../placeholder.png'; // Import the placeholder image

// Assuming you have a type or interface for your tea data
interface Tea {
  name: string;
  description: string;
  imageUrl: string;
}

const teas: Tea[] = [
    {
      name: 'Green Tea',
      description: 'Green tea is rich in antioxidants and has a delicately earthy flavor.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Black Tea',
      description: 'Black tea offers a strong, robust flavor and is fully oxidized for a darker brew.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Herbal Tea',
      description: 'Herbal tea, not from the Camellia sinensis plant, can be a blend of herbs, spices, and fruits.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Oolong Tea',
      description: 'Oolong tea is partially oxidized, offering a diverse range of flavors depending on the degree of oxidation.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'White Tea',
      description: 'White tea is the least processed, known for its delicate flavor and natural sweetness.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Pu-erh Tea',
      description: 'Pu-erh tea is aged and fermented, characterized by its earthy flavor.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Matcha',
      description: 'Matcha is a powdered green tea used in traditional Japanese tea ceremonies.',
      imageUrl: placeholder, // Replace with your actual image path
    },
    {
      name: 'Chai',
      description: 'Chai is a spiced milk tea with a mixture of aromatic herbs and spices.',
      imageUrl: placeholder, // Replace with your actual image path
    },
  ];

const TeaList: React.FC = () => {
  return (
    <div className="tea-list">
      {teas.map((tea, index) => (
        <TeaCategory key={index} {...tea} />
      ))}
    </div>
  );
};

export default TeaList;