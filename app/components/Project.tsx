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
    <div className="px-4 w-full mt-8">
      <h3 className="w-full text-center">{projectName}</h3>
      <div className="title text-center flex flex-col flex-wrap content-center">
        <div className="separate-line w-52 mt-2"></div>
      </div>

      <div className="2xl:w- col1 flex justify-center">
        <div className="xl:w-fit pr-12 flex flex-col h-80">
          <div className="project-header flex mt-4 h-80">
            <div className="flex flex-col ">
              {paraState == true ? (
                <p className="lg:w-96 md:w-80 p-5">{para}</p>
              ) : (
                <p className=" md:w-80 p-5">{para}</p>
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

            <img
              src={`${projectName}/forside.png`}
              alt="Magazine cover"
              className="h-full w-auto mx-2"
            />

            {paraState &&
              Array.from(
                { length: imageAmount },
                (_, i) => (
                  console.log(i + 1),
                  (
                    <img
                      key={i}
                      src={`${projectName}/${i + 1}.jpg`}
                      alt={`Image ${i + 1}`}
                      className="mx-2 w-auto h-full "
                    />
                  )
                )
              )}

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
