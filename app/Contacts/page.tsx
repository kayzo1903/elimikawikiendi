import React from "react";
import TopIntro from "../components/TopIntro/TopIntro";
import ContactsForms from "./components/Forms/CotactsForms";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ContactsPage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full mx-auto py-16 space-y-8 flex flex-col items-center">
        <TopIntro firstword={"Contact"} secondword={"us"}/>
        <section className="flex gap-4 justify-center w-full flex-wrap px-2">
          <ContactsForms />
          <article className="max-w-[448px] space-y-4 text-gray-600">
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, in.
              Perspiciatis iusto ullam similique veritatis modi, possimus
              dolores molestiae eaque nisi quam. Suscipit adipisci dolores
              expedita maiores, perferendis est tempore.
            </p>
            <div className=" text-sm">
              <h6>Elimikawikiendi@gmail.com</h6>
              <h6>+255 756 *** ***</h6>
              <h6>Office floor 4 MwengeTower</h6>
            </div>
            <div>
              <span className="">Follow on:</span>
              <div>
                <div className="flex gap-2 items-center">
                  <FaFacebook />
                  <BsTwitter />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ContactsPage;
