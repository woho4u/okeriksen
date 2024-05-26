import React from "react";

interface Props {
  title: string;
}

const Skill = ({ title }: Props) => {
  return (
    <div className="testest offwhite gray1-bg border-primaryRed border-2">
      {title}
    </div>
  );
};

export default Skill;
