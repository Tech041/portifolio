import React from "react";

const About = () => {
  return (
    <section className="h-screen">
      <div className="container py-10 w-full">
        <div className="py-3">
          <h1 className="text-2xl font-bold text-accent-500 py-3">About me</h1>
          <p>
            My name is Chinwuba Nelson Chikamso, and I am a dedicated pharmacist
            and a passionate front-end web developer. With a strong background
            in healthcare and a keen eye for design, I enjoy creating functional
            and visually appealing web applications.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-green-600">My Journey</h1>
          <p>
            As a pharmacist, I have honed my skills in precision, attention to
            detail, and problem-solving. These qualities seamlessly translate
            into my work as a web developer, where I focus on creating intuitive
            user interfaces and ensuring a seamless user experience.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-green-600">Skills</h1>
          <p>
            <span className="text-accent-500">Pharmacy</span>: Medication
            management, patient counseling, pharmaceutical research,
          </p>
          <p>
            <span className="text-accent-500"> Web Development</span>: HTML,
            CSS, JAVASCRIPT, REACT.JS,NEXT.JS,TAILWIND CSS, CMS[wordpress] .
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-green-600">Contact</h1>
          <p>
            Feel free to explore my portfolio and reach out if you have any
            questions or would like to collaborate. {`Let's`} create something
            amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
