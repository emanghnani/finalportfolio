import Image from "next/image";
import React from "react";
import html from '/public/html.png';
import css from "/public/css.png";
import javascript from "/public/javascript.png";
import reactImage from "/public/react.png";
import nextjs from "/public/nextjs.png";
import tailwind from "/public/tailwind.png";
import node from "/public/node.png";
import unity from "/public/unity.png";
import kotlin from "/public/kotlin.png";
import springboot from "/public/spring.png";
import shopify from "/public/shopify.png";
import wordpresslogo from "/public/wordpresslogo.png";

const Experience = () => {
  const experience = [
    { id: 1, title: "HTML", src: html },
    { id: 2, title: "CSS", src: css },
    { id: 3, title: "JavaScript", src: javascript },
    { id: 4, title: "React", src: reactImage },
    { id: 5, title: "Next JS", src: nextjs },
    { id: 6, title: "Tailwind", src: tailwind },
    { id: 7, title: "Node JS", src: node },
    { id: 8, title: "Unity (C#)", src: unity },
    { id: 9, title: "Kotlin", src: kotlin },
    { id: 10, title: "Springboot", src: springboot },
    { id: 11, title: "WordPress", src: wordpresslogo },
    { id: 12, title: "Shopify", src: shopify },
  ];

  return (
    <div id="experience" className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-blue-500 font-bold">
          Skills
        </h2>
        <p className="py-6 text-sm sm:text-base text-gray-800 dark:text-white max-w-3xl mx-auto">
          These are the languages that I have used in past projects and have also been studying while working on current projects
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mt-10">
          {experience.map(({ id, title, src }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-md p-4 hover:scale-105 duration-200 bg-white dark:bg-gray-800"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 relative">
                <Image
                  src={src}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className="text-sm sm:text-base font-medium text-gray-800 dark:text-white capitalize group-hover:underline underline-offset-4">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
