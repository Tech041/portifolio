import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";

const iconsStyles =
  "w-[40px] h-[40px] rounded-[50px] flex justify-center items-center cursor-pointer hover:bg-green-600";

const Icons = () => {
  return (
    <div className="flex gap-5 justify-start items-center py-1">
      <div className="flex gap-1 justify-center items-center py-4">
        <div className={iconsStyles}>
          <Link
            target="_blank"
            href="https://web.facebook.com/mandela.nelson.18062"
          >
            <FaFacebookF size={25} color="white" />
          </Link>
        </div>
        <div className={iconsStyles}>
          <Link target="_blank" href="https://x.com/lorenz_Scot">
            <GrTwitter size={25} color="white" />
          </Link>
        </div>
        <div className={iconsStyles}>
          <Link target="_blank" href="https://www.instagram.com/voyage_wears/">
            <FaSquareInstagram size={25} color="white" />
          </Link>
        </div>
        <div className={iconsStyles}>
          <Link
            target="_blank"
            href="https:www.linkedin.com/in/chinwuba-nelson-838206238"
          >
            <FaLinkedinIn size={25} color="white" />
          </Link>
        </div>
        <div>
          <Link target="_blank" href="https://wa.link/kfy3gw">
            <BsWhatsapp size={25} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Icons;
