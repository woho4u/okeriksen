"use client";
import React, { useState } from "react";
import Olink from "./Olink";
import Image from "next/image";
import Link from "next/link";
import ModalImage from "react-modal-image";

interface Props {
  projectName: string;
  para: string;
  imageAmount: number;
}

const Project = ({ projectName, para, imageAmount }: Props) => {
  const [paraState, setParaState] = React.useState(false);
  const [clickedImage, setClickedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setClickedImage(src);
  };

  const closePreview = () => {
    setClickedImage(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setParaState(!paraState);
  };

  return (
    <>
      <div className="px-4 w-full mt-20 z-20 transition">
        <h3 className="w-full text-center">{projectName}</h3>
        <div className="title text-center flex flex-col flex-wrap content-center">
          <div className="separate-line w-52 mt-2"></div>
        </div>

        <div className={`2xl:w- col1 flex justify-center pt-4`}>
          {/* {paraState === true ? (
          <p className="lg:w-96 md:w-86 p-5 transition ">{para}</p>
        ) : (
          <p className="lg:w-86 md:w-80 p-5 transition ">{para}</p>
        )} */}
          <div
            className={` ${
              paraState === true ? "w-full" : "w-680"
            }   pr-12 flex flex-col h-80 transition `}
          >
            <div className={`project-header flex relative h-80`}>
              <div className="flex flex-col z-30 gray1-bg">
                {paraState === true ? (
                  <p className="lg:w-96 md:w-86 p-5 transition ">{para}</p>
                ) : (
                  <p className="lg:w-96 md:w-80 p-5 transition ">{para}</p>
                )}

                <div id="container" className="ml-3">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>

                    <Link
                      href=""
                      onClick={(e) => handleClick(e)}
                      scroll={true}
                      className={"button-text"}
                    >
                      View All
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex relative z-30 gray1-bg">
                <Image
                  width={200}
                  height={300}
                  src={`${projectName}/forside.png`}
                  alt="Magazine cover"
                  className={`h-full w-auto mx-2 ${
                    clickedImage === `${projectName}/forside.png`
                      ? "fixed top-0 left-0 object-cover z-50 mx-auto"
                      : ""
                  }`}
                  onClick={() => handleImageClick(`${projectName}/forside.png`)}
                />
              </div>
              <div
                className={`max-w-none flex h-80 w-fit absolute transition-all duration-1000 ease-in-out transform ${
                  paraState == true
                    ? "ml-full translate-x-0 opacity-100 right-0"
                    : "ml-full project-translate opacity-100 right-0"
                }`}
              >
                {Array.from({ length: imageAmount }, (_, i) => (
                  <Image
                    width={200}
                    height={300}
                    key={i}
                    src={`${projectName}/${i + 1}.jpg`}
                    alt={`Image ${i + 1}`}
                    className={`mx-1 w-auto h-full max-w-none transition-all duration-1000 ease-in-out transform ${
                      paraState == true ? "opacity-100" : "opacity-0"
                    } ${
                      clickedImage === `${projectName}/${i + 1}.jpg`
                        ? "fixed top-0 left-0 object-cover z-50"
                        : ""
                    }`}
                    onClick={() =>
                      handleImageClick(`${projectName}/${i + 1}.jpg`)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {clickedImage && (
        <div
          className="fixed top-0 left-0 z-100 flex items-center justify-center"
          onClick={closePreview}
        >
          <Image
            src={clickedImage}
            alt="Clicked image"
            layout="fill"
            objectFit="contain"
            className="z-70"
          />
        </div>
      )}
    </>
  );
};

export default Project;
