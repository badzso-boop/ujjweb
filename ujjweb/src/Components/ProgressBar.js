import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import "../App.css";

const Progress = ({ text, percent }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(percent, 10);
    if (start === end) return;

    const incrementTime = 10; // ms
    const step = (end - start) / 100;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setWidth(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="text-left my-1">
      <h5 className="text-sm">
        <Tag text="h5">
          <span className="font-bold">{text}</span>
        </Tag>
      </h5>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
