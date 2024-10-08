import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import Icons from "../icons/Icons";

const iconsStyles =
  "w-[40px] h-[40px] rounded-[50px] flex justify-center items-center cursor-pointer hover:bg-green-600";

const Head = () => {
  return (
    <main>
      <section className=" h-[250px] pt-10 md:pt-5 w-full">
        <div className="container head-region w-full">
          <div>
            <h1 className="text-2xl font-bold">
              Hi!,my name is
              <span className="text-green-600 px-1">
                Chinwuba Nelson Chikamso
              </span>
            </h1>
            <h1 className="text-xl  font-semibold">
              I am a Front End Web Developer
            </h1>
          </div>
          <div className="text-green-600 pt-3 mt-2 flex items-center justify-between  ">
            <div className="">
              <Link
                href="/TechCV.pdf"
                download="nelsoncv.pdf"
                className=" py-1 px-2"
              >
                MY CV
              </Link>
            </div>
            <div className="cert">
              <Link href="/KlickCert.pdf" className="uppercase  px-2">
                Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="  bg-green-700 md:h-[600px] flex justify-center items-center h-screen w-full">
        <div className="wrapper container  w-full py-10">
          {/* <h1 className="text-center text-green-600 font-bold text-xl py-4 ">
            ABOUT ME
          </h1> */}
          <div className="flex justify-between flex-col md:flex-row   ">
            <div className="img flex-1 w-full    md:w-auto flex justify-center items-center py-4 md:py-0">
              <Image
                width={144}
                height={144}
                src="/image/profile.jpg"
                alt="image"
                className="h-36 w-36 rounded-full ring-2 ring-accent-500 shadow-lg object-cover"
              />
            </div>
            <div className=" flex-1">
              <h1 className=" md:pt-5  font-semibold text-xl">
                Pharmacist and Web developer...
              </h1>
              <div className=" text-center md:text-start py-2">
                <Link
                  href="/about"
                  className="text-green-800 bg-white py-1 px-1 rounded-md hover:bg-accent-300 "
                >
                  Read more
                </Link>
              </div>
              <p className="py-2 text-white font-semibold">
                Email: chinwubanelson@gmail.com
              </p>
              <p className="py-2 text-white font-semibold">Tel:08030507512</p>
              <Icons />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="container">
          <h1 className="text-center text-xxl font-semibold my-10 text-green-600">
            PROJECTS
          </h1>
        </div>
        <div className="container">
          <div className="wrapper-1 flex flex-col md:flex-row  justify-between gap-5 items-center">
            <div className="flex-1">
              {" "}
              <div className="text-wrapper">
                <h2 className="text-xl font-semibold py-2 text-accent-500 ">
                  Gym website
                </h2>
                <p>
                  I developed this gym website using next.js and tailwind css to
                  <br />
                  demonstrate responsive design. It is responsive to different
                  <br />
                  screen sizes ranging from small to extra large.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="text-green-600 py-2">
                  <Link
                    target="_blank"
                    href="https://mikegym.vercel.app"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    View live
                  </Link>
                </div>
                {/* <div className="text-green-600 py-2">
                  <Link
                    href="https://github.com/Tech041/my-app.git"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    Source code
                  </Link>{" "}
                </div> */}
              </div>
            </div>
            <div className="img-wrapper flex-1 w-full">
              <Image
                width={300}
                height={100}
                src="/image/project-1.png"
                alt="project-image"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="wrapper-1 flex flex-col md:flex-row  justify-between gap-5 items-center">
            <div className="flex-1">
              {" "}
              <div className="text-wrapper">
                <h2 className="text-xl font-semibold py-2 text-accent-500 ">
                  School Admin Dashboard
                </h2>
                <p>
                  I developed this school admin dashboard website using next.js
                  and tailwind css to
                  <br />
                  demonstrate responsive design and integration of third party
                  UI libraries . It is responsive to different
                  <br />
                  screen sizes ranging from small to extra large.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="text-green-600 py-2">
                  <Link
                    target="_blank"
                    href="https://neltechmanagementsystem.vercel.app/"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    View live
                  </Link>
                </div>
                {/* <div className="text-green-600 py-2">
                    <Link
                      href="https://github.com/Tech041/neldev.git"
                      className="border-2 border-gray-500 py-1 px-2"
                    >
                      Source code
                    </Link>{" "}
                  </div> */}
              </div>
            </div>
            <div className="img-wrapper flex-1 w-full">
              <Image
                width={300}
                height={100}
                src="/image/dashboard.png"
                alt="project-image"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="wrapper-1 flex flex-col md:flex-row  justify-between gap-5 items-center">
            <div className="flex-1">
              {" "}
              <div className="text-wrapper">
                <h2 className="text-xl font-semibold py-2 text-accent-500 ">
                  Solar Installation Company
                </h2>
                <p>
                  I developed this solar installation website using next.js and
                  tailwind css to
                  <br />
                  demonstrate responsive design. It is responsive to different
                  <br />
                  screen sizes ranging from small to extra large.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="text-green-600 py-2">
                  <Link
                    target="_blank"
                    href="https://kartasunenergysolutions.vercel.app/"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    View live
                  </Link>
                </div>
                {/* <div className="text-green-600 py-2">
                  <Link
                    href="https://github.com/Tech041/kartasun.git"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    Source code
                  </Link>{" "}
                </div> */}
              </div>
            </div>
            <div className="img-wrapper flex-1 w-full">
              <Image
                width={300}
                height={100}
                src="/image/kartasun.png"
                alt="project-image"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="wrapper-2 flex flex-col md:flex-row  justify-between gap-5 items-center">
            <div className="flex-1">
              {" "}
              <div className="text-wrapper">
                <h2 className="text-xl font-semibold py-2  text-accent-500">
                  Simple Todo App
                </h2>
                <p>
                  I developed this todo list using next.js and tailwind css to
                  demonstrate <br />
                  responsive design,javascript array methods and use of state
                  hooks.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="text-green-600 py-2">
                  <Link
                    target="_blank"
                    href="https://todo-list-nu-peach.vercel.app/"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    View live
                  </Link>
                </div>
                {/* <div className="text-green-600 py-2">
                  <Link
                    href="https://github.com/Tech041/todo.git"
                    className="border-2 border-gray-500 py-1 px-2"
                  >
                    Source code
                  </Link>{" "}
                </div> */}
              </div>
            </div>
            <div className="img-wrapper flex-1 w-full">
              <Image
                width={300}
                height={100}
                src="/image/todo.png"
                alt="project-image"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Head;
