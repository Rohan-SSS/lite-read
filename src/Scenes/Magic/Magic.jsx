import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BotCon, MagicNavCon, TextCon } from "../../Containers";
import "./Magic.css";

const Magic = () => {
  const { title } = useParams();
  const [botToggle, setBotToggle] = useState(false);

  const handleToggle = () => {
    setBotToggle(!botToggle);
  };

  return (
    // main container
    <div className="magic">
      {/* sub container to manage child divs, also checks for collapsing of bot */}
      <div className={`magic-box ${!botToggle ? "center-textbox" : ""}`}>
        {/* if bot is collapsed then show centered text box and enable navigation */}
        <div className={`navbox ${!botToggle ? "fadeIn" : ""}`}>
          {!botToggle && <MagicNavCon title={title} />}
        </div>

        {/* text con */}
        <div className="textbox">
          <BotCon />
        </div>

        {/* bot con */}
        <div
          className={`botbox ${botToggle ? "enter" : "exit"}`}
          style={{ display: botToggle ? "block" : "none" }}
        >
          <TextCon />
        </div>

        {/* icon button to collapse/uncollapse bot */}
        <IconButton
          aria-label="toggle"
          onClick={handleToggle}
          className="toggleButton"
        >
          {/* arrow animation */}
          {botToggle ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
      </div>
    </div>
  );
};

export default Magic;
