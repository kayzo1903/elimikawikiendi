import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Homepage = () => {
  return (
    <section className="w-full bg-secondary dark:bg-gray-950 h-fit py-16 px-2">
      <div className="flex gap-4 flex-wrap">
        {/* author-image */}
        <div className="w-[448px] h-[420px] bg-slate-400"></div>
        {/* author-bio */}
        <div className="max-w-md pt-8 space-y-8">
          <h3 className="text-xl md:text-2xl">Hi! Im kayzo mmari</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            quidem ut sequi ipsam! Sit nam blanditiis id provident laboriosam
            accusamus, totam rem! Doloremque atque ducimus deserunt,
            reprehenderit fugit at debitis!
          </p>
          <div className="space-y-4">
            <h6 className="text-base">Follow on social:</h6>
            <div className="flex gap-2 items-center">
              <FaFacebook />
              <BsTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
