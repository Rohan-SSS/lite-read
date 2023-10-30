import React, { createContext, useEffect, useState } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const [textData, setTextData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const changeStory = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/story?page=${currentPage}`);
        const data = await response.json();
        setTextData(data.text);
      } catch (error) {
        console.error("Failed to fetch text data:", error);
      }
    };

    fetchTextData();
  }, [currentPage]);

  return (
    <StoryContext.Provider value={{ story: textData, changeStory }}>
      {children}
    </StoryContext.Provider>
  );
};
