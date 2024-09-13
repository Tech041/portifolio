import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import Icons from "../icons/Icons";
const iconsStyles =
  "w-[40px] h-[40px] rounded-[50px] flex justify-center items-center cursor-pointer hover:bg-green-600";

const Footer = () => {
  return (
    <section className="bg-accent-500 py-10">
      <div className="container">
        <h5 className="text-center text-[16px] text-white">
          &copy; All rights reserved.Chinwuba Nelson Chikamso
        </h5>
        <Icons />
      </div>
    </section>
  );
};

export default Footer;
