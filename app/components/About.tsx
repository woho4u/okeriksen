import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCode,
//   faLaptopCode,
//   faPenNib,
//   faObjectGroup,
//   faDumbbell,
//   faMusic,
// } from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";
import Title from "./Title";
import LinedSquare from "./LinedSquare";

const About = () => {
  const devSkills = [
    "HTML",
    "CSS",
    "C#",
    "Git",
    "SASS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Python",
    "GitHub",
  ];

  const designSkills = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "XD",
    "Premiere Pro",
  ];

  return (
    <>
      {/* <div className="devSkills">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[284px] md:max-w-[570px]">
          <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
            <div className="flex-wrap p-5 hidden dark:flex h-[156px] md:h-[268px] w-full rounded-lg bg-gray-700 content-center justify-center">
              {devSkills.map((skill) => (
                <Skill title={skill} key={skill} />
              ))}

            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[640px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>

      <div className="designSkills">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[274px] md:max-w-[512px]">
          <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
            <div className="flex-wrap p-5 content-center justify-center hidden dark:flex h-[140px] md:h-[242px] w-full rounded-xl bg-gray-700">
              {designSkills.map((skill) => (
                <Skill title={skill} key={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
        <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
      </div> */}

      <div
        id="about-me"
        className="about-container flex flex-col items-center w-full"
      >
        <Title title="About me" className="mb-12" />

        <div className="about-content container mt-5 px-20">
          <div className="container flex justify-start">
            <div className="flex 4/5 flex-row justify-center"></div>
            <div className="flex w-full flex-row justify-center">
              <div className="w-2/5 para-container flex flex-col flex-wrap content-center justify-center">
                <h3 className="w-full">Get to know me!</h3>
                <p className="about-para">
                  Other than developing, I enjoy playing the piano, rock
                  climbing, snowboarding, working out, and most other activities
                  that involve moving my body.
                </p>
                <p className="about-para">
                  I am an active learner, and as a developer I am always looking
                  for opportunities to feed my curiosity. Through this eagerness
                  to learn, I have become a fullstack developer, and a graphic
                  designer. I am currently attending Mailand Highschool, where I
                  am studying IT and media communication.
                </p>
                <p className="about-para">
                  In a nutshell, I <i>love</i> <strong>learning</strong> new
                  things, and <strong>improving</strong> in what i already know.
                </p>
              </div>
              <div className="w-370 mt-12 para-container px-7">
                <div className="relative about-img-container">
                  <img
                    src="me/fjell.jpg"
                    className="z-10 mt-10 about-img absolute"
                    alt=""
                  />
                  <LinedSquare
                    color="#565e66"
                    className="absolute about-img-bg h-5/6 ml-11"
                    stroke={2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-wrap flex-row w-full mt-40">
              <div className="skills-block xl:w-1/2 w-full min-w-96 mt-20">
                <h3 className="w-full text-center mb-7">Development skills</h3>
                <div className="skills px-6 flex flex-wrap">
                  {devSkills.map((skill) => (
                    <Skill title={skill} key={skill} />
                  ))}
                </div>
              </div>

              <div className="skills-block xl:w-1/2 w-full min-w-96 mt-20">
                <h3 className="w-full text-center mb-7">Design skills</h3>
                <div className="skills px-6 flex flex-wrap">
                  {designSkills.map((skill) => (
                    <Skill title={skill} key={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
