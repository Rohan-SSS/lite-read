import React, { useContext } from "react";
import { StoryContext } from "../StoryProvider";
import "./TextComp.css";

const TextComp = () => {
  const storyFromContext = useContext(StoryContext).story;

  return (
    <div
      className="text-container"
      dangerouslySetInnerHTML={{ __html: storyFromContext }}
    />
  );
};

export default TextComp;
