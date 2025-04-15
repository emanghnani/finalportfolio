import React from 'react';
import Image from 'next/image';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Main = () => {
  // Hardcoded data instead of API call
  const userData = {
    description: "Full Stack Developer"
  };
  
  return (
    <main>
      <section className="min-h-screen">
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">{userData.description}</h2>
          <h3 className="text-2xl py-2 text-gray-800 dark:text-white">Software Engineer/E-Commerce Manager</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
            Java developer currently working as a WordPress/Shopify Freelancer specializing in E-Commerce
          </p>
        </div>
        
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a
            href='https://www.instagram.com/eshantmanghnani/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram />
          </a>
          <a
            href='https://ph.linkedin.com/in/eshant-manghnani-94b8b3137'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin />
          </a>
        </div>
        
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 flex items-center justify-center">
  <div className="relative w-72 h-72 rounded-full overflow-hidden">
    <Image 
      src="/testpic.jpg" 
      alt="Profile picture"
      layout="fill" 
      objectFit="cover"
      priority
    />
  </div>
</div>
      </section>
    </main>
  );
};

export default Main;