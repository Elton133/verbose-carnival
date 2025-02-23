import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        id="myself"
        className="w-full md:w-1/2 text-center md:text-[16px] text-sm p-5 md:p-0"
      >
        <p>
          I am Ghanaian, from Greater Accra, specifically Prampram 🇬🇭. I love
          music and play several instruments 🎺🎹—the name already says it all,
          in case you missed that 😉. I currently speak four languages: English,
          Ga, Ga-Adangme, and French. My French is still in the developing stage
          😂.
          <br />
          <br />
          As a frontend engineer, I specialize in building responsive,
          interactive web applications that provide exceptional user
          experiences. My goal is to bring my client's vision to life—not just
          through aesthetics but by ensuring a seamless and intuitive user
          journey.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
