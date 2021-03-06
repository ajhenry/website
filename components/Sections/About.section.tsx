import Image from "next/image";

const About = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <h1 className="text-3xl font-bold text-white">Andrew</h1>
        <h3 className="mt-1 text-lg font-medium text-gray-300">
          Hey I&apos;m ajhenry, a Full Stack Software Engineer and Open Source
          enthusiast
        </h3>

        <p className="mt-4 text-gray-400">
          Building modern web apps — proficient in TypeScript and Python
        </p>
      </div>

      <div className="custom:block hidden">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
