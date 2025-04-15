import React, { useState } from "react";
import { MdExpandMore, MdArrowForward, MdArrowBack } from "react-icons/md";
import stroop from '/public/stroop.png';
import vault from "/public/vault.png";
import wordpress from "/public/wordpress1.png";
import wordpress2 from "/public/wordpress2.png";
import wordpress3 from "/public/wordpress3.png";
import shopify1 from "/public/shopify1.png";
import shopify2 from "/public/shopify2.png";
import shopify3 from "/public/shopify3.png";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "WordPress E-Commerce Websites",
      images: [wordpress, wordpress2, wordpress3], // Add multiple images here
      url: "https://kalosawear.com",
      description: "I have worked on several WordPress websites for clients. I have been doing mostly e-commerce websites due to the rising demand of these sites in the Philippines. A good example of this would be www.kalosawear.com which is a website that was made for women clothing in the Philippines, primarily silk and plus sized clothing. I designed everything including their logo as well as suggestions they could implement for their social media pages. Images also show the mobile site which was a priority for the client."
    },
    {
      id: 2,
      title: "Stroop! (Mobile Game)",
      images: [stroop], // Add multiple images here
      url: "https://appadvice.com/app/stroop-concentration-test/1453941217",
      description: "This is a mobile application that I had worked on during my free time in University using Unity (C#). This application was a game that simply tested a user's concentration and cognitive ability using the Stroop effect. The goal was for a user to select colors that did not match their text and leave the colors that did match their text. I had also implemented a leaderboard using Facebook APIs as well as Playfab" 
    },
    {
      id: 3,
      title: "Vault (Hillarys App Store)",
      images: [vault], // Add multiple images here
      url: "https://play.google.com/store/apps/details?id=com.hillarys.vault&hl=en_GB&gl=US",
      description: "This is an application I had worked on during my internship with Hillarys Blinds in Nottingham. I had worked on implementing the download function for the apps that were hosted on Firebase as well as implementing a cache where commands sent by an API would be stored in the application until a user refreshed their application. This helped save costs on our Firebase membership as we were only using minimal commands instead of sending one every time a user needed to update."
    },
    {
      id: 4,
      title: "Shopify Websites",
      images: [shopify1, shopify2, shopify3], // Add multiple images here
      url: "",
      description: "I have also worked on Shopify websites when required by clients. This is a website of a clothing reseller in the Philippines called Iconic Streetwear. I have set up his website as well as Social Media presence. I have also set up his payment gateway to accept GCash (A local digital wallet) and to accept Cash On Delivery orders."
    },
  ];

  // State to track current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Handle image navigation
  const goToNextImage = (e, projectId) => {
    e.preventDefault(); // Prevent link navigation when clicking arrows
    e.stopPropagation();
    
    const project = portfolios.find(p => p.id === projectId);
    const nextIndex = ((currentImageIndex[projectId] || 0) + 1) % project.images.length;
    
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectId]: nextIndex
    });
  };

  const goToPrevImage = (e, projectId) => {
    e.preventDefault(); // Prevent link navigation when clicking arrows
    e.stopPropagation();
    
    const project = portfolios.find(p => p.id === projectId);
    const prevIndex = ((currentImageIndex[projectId] || 0) - 1 + project.images.length) % project.images.length;
    
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectId]: prevIndex
    });
  };

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-l text-center md:text-left py-16">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">
          Projects I have worked on
        </h2>
        <p className="py-10 text-gray-800 dark:text-white">
          Some projects I have worked on in my free time, during university as well as projects I've worked on during my internship.
        </p>
  
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, images, url, description }) => (
            <div key={id} className="block group shadow-md shadow-gray-600 overflow-hidden hover:scale-105 rounded-md duration-200">
              <div className="w-full h-full">
                {/* Image Carousel */}
                <div className="relative bg-gray-100 h-96 flex items-center justify-center">
                  <Image
                    src={images[currentImageIndex[id] || 0]}
                    alt={title}
                    width={800}
                    height={600}
                    className="max-h-96 w-auto h-auto object-contain" // Changed to object-contain
                  />
                  
                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => goToPrevImage(e, id)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                      >
                        <MdArrowBack size={28} />
                      </button>
                      <button 
                        onClick={(e) => goToNextImage(e, id)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                      >
                        <MdArrowForward size={28} />
                      </button>
                      
                      {/* Dots indicator */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                          <span 
                            key={index}
                            className={`h-3 w-3 rounded-full ${
                              (currentImageIndex[id] || 0) === index ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-6">
                  <h2 className="text-center text-gray-800 dark:text-white text-lg capitalize my-4 duration-200 group-hover:underline underline-offset-4">
                    {title}
                  </h2>
                  <p className="text-gray-800 dark:text-white text-base my-4 duration-200">
                    {description}
                  </p>
                  
                  {/* Visit link */}
                  {url && (
                    <Link href={url} passHref legacyBehavior>
                      <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-500 hover:underline"
                      >
                        Visit Project →
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;