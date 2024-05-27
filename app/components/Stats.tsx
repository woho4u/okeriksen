import React from "react";
import Title from "./Title";

const Stats = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <Title title="My Stats" />

        <div className="px-40 w-full">
          <div className="col1 flex justify-between">
            <div className="w-1/2 pr-12">
              <p className="about-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                deleniti molestias et repudiandae inventore animi officia id,
                sunt cum eveniet voluptas ipsa Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p className="about-para pr-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                deleniti molestias et repudiandae inventore animi officia id,
                sunt cum eveniet voluptas ipsa Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Quis harum, laboriosam numquam
                illo nemo quae molestias repellendus modi voluptates officia,
                excepturi pariatur
              </p>
            </div>

            <div className="m w-1/2 max-w-lg h-fit gray2-bg border-primaryRed border-2 rounded-md p-9 ">
              <h4>UX/UI Development</h4>
              <progress
                className="progress w-full"
                value={78}
                max="100"
              ></progress>
              <h4 className="mt-7">Web development</h4>
              <progress
                className="progress w-full"
                value={90}
                max="100"
              ></progress>
              <h4 className="mt-7">Graphical design</h4>
              <progress
                className="progress w-full"
                value={80}
                max="100"
              ></progress>
              <h4 className="mt-7">Photography</h4>
              <progress
                className="progress w-full"
                value={70}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
