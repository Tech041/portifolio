import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
const iconsStyles =
  "w-[40px] h-[40px] rounded-[50px] flex justify-center items-center cursor-pointer hover:bg-green-600";

const Footer = () => {
  return (
    <section className="bg-accent-500 py-10">
      <div className="container">
        <h5 className="text-center text-[16px] text-white">
          &copy; All rights reserved.Chinwuba Nelson Chikamso
        </h5>
        <div className="flex gap-1 justify-center items-center py-4">
          <div className={iconsStyles}>
            <Link href="https://web.facebook.com/mandela.nelson.18062">
              <FaFacebookF size={25} color="white" />
            </Link>
          </div>
          <div className={iconsStyles}>
            <Link href="https://x.com/lorenz_Scot">
              <GrTwitter size={25} color="white" />
            </Link>
          </div>
          <div className={iconsStyles}>
            <Link href="https://www.instagram.com/voyage_wears/">
              <FaSquareInstagram size={25} color="white" />
            </Link>
          </div>
          <div className={iconsStyles}>
            <Link href="https:www.linkedin.com/in/chinwuba-nelson-838206238">
              <FaLinkedinIn size={25} color="white" />
            </Link>
          </div>
          <div>
            <Link href="https://wa.link/kfy3gw">
              <BsWhatsapp size={25} color="green" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
