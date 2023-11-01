import React, { useContext } from "react";
import { StoryContext } from "../StoryProvider";
import "./TextComp.css";

const TextComp = () => {
  const storyFromContext = useContext(StoryContext).story;

  return (
    <div className="text-container">
      <p>{storyFromContext}</p>
    </div>
  );
};

export default TextComp;
