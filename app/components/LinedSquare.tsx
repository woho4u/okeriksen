import React from "react";

interface Props {
  className?: string;
  color: string;
  stroke: number;
}

const LinedSquare = ({ className = "w-full", color, stroke }: Props) => {
  return (
    <div className={`absolute z- ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonal-lines"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
          >
            <path
              d="M-1,1 l2,-2
                 M0,10 l10,-10
                 M9,11 l2,-2"
              stroke={color}
              stroke-width={stroke}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>
    </div>
  );
};

export default LinedSquare;
