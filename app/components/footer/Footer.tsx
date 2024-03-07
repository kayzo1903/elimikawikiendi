import Link from "next/link";
import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="!h-fit w-full px-2 bg-secondary pt-16 pb-4 dark:bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-between border-b-[.4px] border-gray-300 pb-16">
        <div className="space-y-4 w-40">
          <Link href="/" className="text-base md:text-xl font-semibold">
            Elimika<span className="text-skin">wikiendi</span>
          </Link>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ea unde eum
          </p>
        </div>
        <div className="space-y-4 w-40">
          <h6>Blog</h6>
          <div className="flex flex-col gap-2 ">
            <Link href={"/"} className="text-gray-600 text-xs">
              Travel
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Technology
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Politics
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Lifestyle
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Business
            </Link>
          </div>
        </div>
        <div className="space-y-4 w-40">
          <h6>Quick Links</h6>
          <div className="flex flex-col gap-2 ">
            <Link href={"/"} className="text-gray-600 text-xs">
              FAQs
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Term & Condition
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Support
            </Link>
            <Link href={"/"} className="text-gray-600 text-xs">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="w-fit space-y-4">
          <h6>Subscribe For Newsletter</h6>
          <Subscribe />
          <div className="space-y-2">
            <h6 className="text-sm">Follow On:</h6>
            <div className="flex gap-2 items-center">
              <FaFacebook />
              <BsTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <h6 className="w-full text-xs text-center pt-4 pb-2 text-gray-600">
        ©copyright 2023 kaynics{" "}
      </h6>
    </section>
  );
};

export default Footer;
