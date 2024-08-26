import React from "react";

export const TreeIcon: React.FC = () => {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <rect
        x="10.25"
        y="2.25"
        width="3.5"
        height="3.5"
        rx="0.75"
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <rect
        x="10.25"
        y="18.25"
        width="3.5"
        height="3.5"
        rx="0.75"
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <rect
        x="18.25"
        y="18.25"
        width="3.5"
        height="3.5"
        rx="0.75"
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <rect
        x="2.25"
        y="18.25"
        width="3.5"
        height="3.5"
        rx="0.75"
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <path d="M4 15L20.5 15" className="stroke-primary" strokeWidth="1" />
      <line
        x1="4.25"
        y1="15"
        x2="4.25"
        y2="18"
        className="stroke-primary"
        strokeWidth="1"
      />
      <line
        x1="12.25"
        y1="6"
        x2="12.25"
        y2="18"
        className="stroke-primary"
        strokeWidth="1"
      />
      <line
        x1="20.25"
        y1="15"
        x2="20.25"
        y2="18"
        className="stroke-primary"
        strokeWidth="1"
      />
    </svg>
  );
};
