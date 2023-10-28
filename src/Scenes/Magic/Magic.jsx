import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BotCon, TextCon } from "../../Containers";
import "./Magic.css";

const Magic = () => {
  const { title } = useParams();
  const [botToggle, setBotToggle] = useState(false);

  const handleToggle = () => {
    setBotToggle(!botToggle);
  };

  return (
    <div className="magic">
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <div className={`magic-box ${!botToggle ? "center-textbox" : ""}`}>
        <div className="textbox">
          <BotCon />
        </div>
        <div
          className="botbox"
          style={{ display: botToggle ? "block" : "none" }}
        >
          <TextCon />
        </div>
        <IconButton
          aria-label="toggle"
          onClick={handleToggle}
          className="toggleButton"
        >
          {botToggle ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
      </div>
    </div>
  );
};

export default Magic;
