import React from "react";

const ContactsForms = () => {
  return (
      <form className="max-w-md space-y-4">
        <div className="space-x-4 flex justify-between">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="name"
            className="bg-skin2 outline-none w-1/2 h-8 rounded-md text-sm text-gray-950 px-4 placeholder:text-gray-600"
          />
          <input
            type="email"
            name="useremail"
            id="useremail"
            placeholder="email"
            className="bg-skin2 outline-none w-1/2 h-8 rounded-md text-sm text-gray-950 px-4 placeholder:text-gray-600"
          />
        </div>
        <input
          type="text"
          name="msgsubject"
          id="msgSubject"
          placeholder="subject"
          className="w-full text-sm px-4 text-gray-950 bg-skin2 outline-none h-8 rounded-md placeholder:text-gray-600"
        />

        <textarea
          name="usermessage"
          id="usermessage"
          cols={30} 
          rows={30}
          placeholder="message"
          className="w-full text-sm px-4 text-gray-950 bg-skin2 outline-none h-36 rounded-md placeholder:text-gray-600"
        ></textarea>
        <button type="submit" className="bg-skin border-skin border-[.4px] hover:bg-transparent px-4 py-2 text-sm text-white rounded-md hover:text-gray-950 hover:dark:text-white">send message</button>
      </form>
  );
};

export default ContactsForms;
