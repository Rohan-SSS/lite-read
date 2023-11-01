import React, { createContext, useEffect, useState } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const [textData, setTextData] = useState("");
  const [selected, setSelected] = useState({
    volume: 1,
    chapter: 1,
    page: 1,
    title: ""
  });
  const changeStory = (title, volume, chapter, page) => {
    setSelected({
      title,
      volume,
      chapter,
      page
    });
  };

  useEffect(() => {
    const fetchTextData = async () => {
      const { title, volume, chapter, page } = selected;

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/novel/${title}/volume/${volume}/chapter/${chapter}/page/${page}`
        );
        const data = await response.json();
        setTextData(data.content);
      } catch (error) {
        console.error("Failed to fetch text data:", error);
      }
    };

    fetchTextData();
  }, [selected]);

  return (
    <StoryContext.Provider value={{ story: textData, changeStory }}>
      {children}
    </StoryContext.Provider>
  );
};
