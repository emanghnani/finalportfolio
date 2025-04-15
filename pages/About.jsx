import Image from 'next/legacy/image';
import cognizant from '/public/cognizant.png'
import { useState } from "react";

const About = () => {
    return (
        <div className="mx-auto text-center md:text-left py-8">
            <div className="m-auto md:grid grid-cols-3 gap-6">
                <div className="col-span-2">
                <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">About</h2 >
                    <h2 className="py-4  text-gray-800 dark:text-white">Information About Me</h2>
                    <p className="py-2  text-gray-800 dark:text-white">I am an employee whose last employment was working for Cognizant Softvision in Makati city, Philippines. 
                        I have a background in several programming languages such as C, C++, C# and Java. 
                    </p>
                    <p className="py-2  text-gray-800 dark:text-white">I have studied Computer Science at De La Salle University as well as Nottingham Trent University. I had also done a year of internship at Hillarys Blinds while studying in University. During my internship year, I had worked on Mobile Application Development using Kotlin and Android Studio. I have also created a mobile game in my free time using Unity that was released on the App store as well as Google Play.
                    </p>
            </div>
            <div className='w-10/12 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center hover:scale-105 ease-in duration-300'>
          <Image src={cognizant} className='rounded-xl' alt='/' />
            </div>
            </div>
        </div>
    )
}

export default About
