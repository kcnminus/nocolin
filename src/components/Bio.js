import React from 'react';
import profilePic from '../assets/profile/green_hat.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin , faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
  return (
    <div className="bg-gray-300 container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-300 w-full md:mb-6 shadow-xl rounded-lg mt-2 md:mt-32">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={profilePic}
                  className="shadow-xl rounded-full h-auto align-center border-none relative flex m-8 md:m-16 ml-10 lg:ml-16"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          <div className="text-center md:mt-12">
            <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
              Colin No
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg text-gray-500" />{" "}
              New York, NY
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-lg text-gray-500" />
              Software Engineer
            </div>
          </div>
          <div className="mt-2 md:mt-10 py-5 md:py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-2 md:mb-4 text-lg leading-relaxed text-gray-800">
                  Hey! I'm Colin. I'm an Operations expert with some software engineering experience.
                  I built this website to work on my web dev chops and showcase some of my work in music and photography.
                  The gallery features an EXIF data reader, which loads the camera settings for each photograph.
                  Feel free to check out my Facebook, LinkedIn, Instagram, and Github using the respective icons for each. 
                </p>
              </div>
            </div>
          </div>
          <div className="leading-none px-3 py-4 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none">
            <ul className="flex flex-row items-center list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.facebook.com/ colincno">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="leading-lg text-gray-600 opacity-75" />
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.linkedin.com/in/  colincno">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="leading-lg text-gray-600 opacity-75" />
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.instagram.com/  nocolin_">
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="leading-lg text-gray-600 opacity-75" />
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.github.com/ kcnminus">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="leading-lg text-gray-600 opacity-75" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};


export default Bio;