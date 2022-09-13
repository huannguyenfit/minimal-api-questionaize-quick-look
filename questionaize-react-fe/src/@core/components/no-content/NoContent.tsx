import React from "react";
import "./NoContent.scss";
import NothingIcon from "../../../assets/svg/nothing-icon.svg";

export default function NoContent() {
  return (
    <div id="nothing-content">
      <img src={NothingIcon} alt="nothing" />
      <div className="text-nothing">There's nothing here...</div>
    </div>
  );
}
