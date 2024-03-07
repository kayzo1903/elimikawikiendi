import React from "react";
import blogpostAi from "../../../../public/Ai.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";


const AuthorInfo = () => {
  return (
    <article className=" flex flex-nowrap gap-4 items-center">
      {/* author pic */}
      <div className="relative w-[160px] h-[160px] overflow-hidden rounded-md">
        <Image
          alt="blog post"
          src={blogpostAi}
          style={{objectFit : 'cover'}}
          layout="fill" 
        />
      </div>
      {/* author-Info */}
      <div className="w-[200px] space-y-4"> 
             <h6 className="text-xl">Kayzo Mmari</h6>
             <p className="text-sm text-gray-600">34 poasts</p>
             <Link href='/AboutUs/author-name' className="text-sm text-red-400">read more about author <FaChevronCircleRight className="inline-block"/></Link>
      </div>
    </article>
  );
};

export default AuthorInfo;
