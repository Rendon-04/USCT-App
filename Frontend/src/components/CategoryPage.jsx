import React from 'react';
import { useParams } from 'react-router-dom';
import data from '/src/components/questionsNaturalizationTest.json'; // Import your JSON dat
const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryData = data[categoryName];

  return (
    <div>
      <h2>{categoryName}</h2>
      {categoryData ? (
        Object.keys(categoryData).map((subcategory, subIndex) => (
          <div key={subIndex}>
            <h3>{subcategory}</h3>
            {Array.isArray(categoryData[subcategory]) ? (
              categoryData[subcategory].map((item, index) => (
                <div key={index} className="question-answer">
                  <h4>Question: {item.question}</h4>
                  <p>Answer: {Array.isArray(item.answer) ? item.answer.join(', ') : item.answer}</p>
                </div>
              ))
            ) : (
              <p>No data available for this subcategory.</p>
            )}
          </div>
        ))
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
};

export default CategoryPage;
