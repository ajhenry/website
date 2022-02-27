import Link from "next/link";
import React from "react";


const Projects: React.FC = () => {
  return (
    <div className="px-3 my-16 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="flex flex-col items-center justify-center gap-10 my-8 sm:flex-row">
        <Link href="https://github.com/ajhenry/hookry" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-full h-full px-2 font-medium text-center rounded-lg bg-primary">
              <p className="text-xl font-semibold">Hookry</p>
              <p>A react native project for crocheters</p>
            </div>
          </a>
        </Link>

        <Link href="https://recommit.io">
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FAA5A5] to-[#FACACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-full h-full px-2 font-medium text-center rounded-lg bg-primary">
              <p className="text-xl font-semibold">recommit.io</p>
              <p>Managed Open Source contributions</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
