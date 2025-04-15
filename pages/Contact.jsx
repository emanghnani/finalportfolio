import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
          {/* right */}
          <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">
          Contact Me
          </h2>
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/ab06d5b2-6f49-4e95-a676-f69b887c7339"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-gray-800 dark:text-white font-light">
                      name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className=" text-gray-800 dark:text-white border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-gray-800 dark:text-white font-light">
                      phone number
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="text-gray-800 dark:text-white border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-gray-800 dark:text-white font-light">
                      email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="text-gray-800 dark:text-white border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-gray-800 dark:text-white font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      className="text-gray-800 dark:text-white border-2 rounded-lg p-3 border-blue-200 focus:outline-none"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="group my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Contact;