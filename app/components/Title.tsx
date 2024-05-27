import React from "react";

interface Props {
  title: string;
  className?: string;
}

const Title = ({ title, className = "" }: Props) => {
  return (
    <>
      <div className={`${className} flex w-full z- mt-40 mb-20 ml-40 px-12 content-center`}>
        <h2 className="whitespace-nowrap mr-5">{title}</h2>
        <div className="separate-line w-full mr-40 my-2 my-auto"></div>
      </div>
    </>
  );
};

export default Title;
