const PersonalDetails = () => {
  return (
    <section className="flex items-center justify-center md:mt-20 mt-15">
      <div className=" text-center" id="personal-details">
        {/* <p className="text-4xl font-bold">Hi 👋🏿 I'm Elton Morden</p> */}
        <svg viewBox="0 0 800 200" width="100%" height="75">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            className="animated-text fill-current text-black dark:text-white"
          >
            Hi 👋🏿 I'm Elton Morden
          </text>
        </svg>

        {/* <p className="text-2xl text-gray-300">Aspiring Software Engineer</p> */}
      </div>
    </section>
  );
};

export default PersonalDetails;
