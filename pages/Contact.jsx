import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="w-full h-auto rounded-xl p-4 bg-white dark:bg-gray-800 shadow-md">
          <form
            action="https://getform.io/f/ab06d5b2-6f49-4e95-a676-f69b887c7339"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-800 dark:text-white">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-lg p-3 border-2 border-blue-200 dark:bg-gray-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-800 dark:text-white">Phone</label>
                <input
                  name="phone"
                  type="text"
                  required
                  className="rounded-lg p-3 border-2 border-blue-200 dark:bg-gray-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 dark:text-white">Email</label>
              <input
                name="email"
                type="email"
                required
                className="rounded-lg p-3 border-2 border-blue-200 dark:bg-gray-900 dark:text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 dark:text-white">Message</label>
              <textarea
                name="message"
                rows="6"
                required
                className="rounded-lg p-3 border-2 border-blue-200 dark:bg-gray-900 dark:text-white focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold uppercase hover:scale-105 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
