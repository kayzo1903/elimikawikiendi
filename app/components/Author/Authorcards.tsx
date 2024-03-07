import React from "react";
import Image from "next/image";
import blogpostAi from "../../../public/Ai.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Authorcards = () => {
  return (
    <div className="flex gap-4 flex-nowrap">
      <div className="h-24 w-24 relative rounded-full overflow-hidden">
        <Image
          alt="blog post"
          src={blogpostAi}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-1 w-44">
         <h3 className="text-xl">kay Mmari</h3>
         <p className="text-xs text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <div className="flex gap-4 items-center">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
         </div>
      </div>
    </div>
  );
};

export default Authorcards;
