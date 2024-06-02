import React from "react";

import "../App.css";

const InputTag = ({ type, placeholder}) => {
  return (
    <div className="m-auto">
        <span className="E63946">{"<"}</span>
        <span className="A8DADC">input type</span>
        <span className="E63946">="</span>
        <span className="F1FAEE">{type}</span>
        <span className="E63946">" </span>
        <span className="A8DADC">placeholder</span>
        <span className="E63946">="</span>
        <span className="F1FAEE">{placeholder}</span>
        <span className="E63946">"{">"}</span>
    </div>
  );
};

export default InputTag;
