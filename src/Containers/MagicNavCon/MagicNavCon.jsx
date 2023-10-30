import React from "react";
import { MgNavComp } from "../../Components";
import "./MagicNavCon.css";

const MagicNavCon = ({ title }) => {
  return (
    <div className="navcon">
      <MgNavComp title={title} />
    </div>
  );
};

export default MagicNavCon;
