import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="h-screen">
      <div className="container py-10 w-full">
        <div className="py-3">
          <Link href="/" className="text-xl font-bold text-green-500">
            Back To Home
          </Link>
          <h1 className="text-2xl font-bold text-accent-500 py-3">Name:</h1>
          <p className="text-xl md:text-3xl font-bold">
            Chinwuba Nelson Chikamso
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-bold text-accent-500 py-3">
            Qualifications
          </h1>
          <div className="flex justify-center gap-4 items-center py-2">
            <span className="flex-1">Primary Education:</span>
            <span className="flex-1">First School Leaving Certificate</span>
          </div>
          <hr className=" border-2 border-green-100" />
          <div className="flex justify-center gap-4 items-center py-2">
            <span className=" flex-1">Secondary Education:</span>
            <span className="flex-1">
              West African Senior School Certificate(WAEC)
            </span>
          </div>
          <hr className=" border-2 border-green-100" />

          <div className="flex justify-center gap-4 items-center">
            <span className="flex-1">Tertiary Education:</span>
            <span className="flex-1">Bachelor of Pharmacy(1st Class)</span>
          </div>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-bold text-accent-500 py-3">
            Other Qualifications
          </h1>
          <div className="flex justify-center gap-4 items-center py-2">
            <span className="flex-1">Klicks Institute of ICT Studies:</span>
            <span className="flex-1">Full Stack Web Development</span>
          </div>
          <div className="flex justify-center gap-4 items-center py-2 flex-wrap ">
            <span className="flex-1">Technologies:</span>
            <span className="flex-1">
              Html,Css,Js,React.Js,PHP,Wordpress,Mysql
            </span>
          </div>
          <hr className="border-4 border-green-100" />
          <div className="flex justify-center gap-4 items-center py-2">
            <span className=" flex-1">Coding War Bootcamp:</span>
            <span className="flex-1 ">Front End Web Development</span>
          </div>
          <div className="flex justify-center gap-4 items-center py-2">
            <span className=" flex-1">Technologies:</span>
            <span className="flex-1 ">
              Html,Css,Tailwind Css, Js,Ts,,React.Js,Next.Js
            </span>
          </div>
          <hr className="border-4 border-green-100" />
        </div>
        <h1 className="flex-1 py-4 text-2xl font-bold">Job Experience:</h1>

        <div className="flex justify-center items-center gap-4">
          <span className="flex-1">Klicks Institute Of ICT Studies:</span>
          <span className="flex-1">As Front End Web Development Coach</span>
        </div>
        <div className="flex justify-center items-center gap-4 my-3">
          <span className="flex-1">Neltechnologies Bootcamp:</span>
          <span className="flex-1">
            As CEO and Coach in Front End Web Deveopment
          </span>
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
          <h1 className="text-xl font-semibold text-green-600">Hobbies</h1>
          <ul className=" py-4">
            <li className="">Playing music</li>
            <li className="">Singing</li>

            <li className="">Writing computer codes</li>

            <li className="">Watching football</li>

            <li className="">Playing Football</li>
          </ul>

          <h1 className="text-xl font-semibold text-green-600">Contact</h1>
          <div className="flex gap-5 flex-col">
            <span className="">Email:chinwubanelson@gmail.com</span>
            <span className="">Tel:+2348030507512</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
