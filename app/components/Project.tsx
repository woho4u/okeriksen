"use client";
import React from "react";
import Olink from "./Olink";

interface Props {
  projectName: string;
  para: string;
  imageAmount: number;
}

const Project = ({ projectName, para, imageAmount }: Props) => {
  const [paraState, setParaState] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setParaState(!paraState);
  };

  return (
    <div className="px-4 w-full mt-10">
      <h3 className="w-full text-center">{projectName}</h3>
      <div className="title text-center flex flex-col flex-wrap content-center">
        <div className="separate-line w-52 mt-2"></div>
      </div>

      <div className={`2xl:w- col1 flex ${paraState ? "" : "justify-center"}`}>
        <div className="xl:w-fit pr-12 flex flex-col h-80">
          <div
            className={`project-header flex mt-4 ${paraState && "h-92"} h-80`}
          >
            <div className="flex flex-col ">
              {paraState === true ? (
                <p className="lg:w-96 md:w-80 p-5 left-0">{para}</p>
              ) : (
                <p className="md:w-80 p-5">{para}</p>
              )}

              <div id="container" className="ml-3">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <Olink
                    title="View All"
                    href=""
                    onClick={(e) => handleClick(e)}
                    className="button-text"
                    scroll={true}
                  />
                </button>
              </div>
            </div>
            <div className="flex relative">
              <img
                src={`${projectName}/forside.png`}
                alt="Magazine cover"
                className="h-full w-auto mx-2"
              />
              <div
                className={`flex h-80 w-fit z- absolute ${
                  paraState == true
                    ? "right-0 fkeslfkesjjk"
                    : "jfkesjkfejskfjse"
                }`}
              >
                {Array.from({ length: imageAmount }, (_, i) => (
                  <img
                    key={i}
                    src={`${projectName}/${i + 1}.jpg`}
                    alt={`Image ${i + 1}`}
                    className={`transition mx-5 w-auto h-full ${
                      paraState == true ? "z-1 ml-1 opacity-100" : "opacity-100"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* <img
              src={`${projectName}/${index + 1}.jpg`}
              alt="s"
              className="lg:w-48 w-52"
            />
            {paraState == true ? null : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
