import React from "react";

import "../App.css";

const Tag = ({ text, children, multiline = false }) => {
  return (
    <div className={`${multiline ? "flex flex-col items-center" : "inline-flex"} m-auto`}>
      <div>
        <span className="E63946">{"<"}</span>
        <span className="A8DADC">{text}</span>
        <span className="E63946">{">"}</span>
      </div>
      <span className={multiline ? "F1FAEE block" : "F1FAEE inline"}>
        {children}
      </span>
      <div>
        <span className="E63946">{"</"}</span>
        <span className="A8DADC">{text}</span>
        <span className="E63946">{">"}</span>
      </div>
    </div>
  );
};

export default Tag;
