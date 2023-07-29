import React from 'react';
import profilePic from '../assets/profile/green_hat.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Bio = () => {
  return (
    <div className="bg-gray-300 container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6 shadow-xl rounded-lg mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={profilePic}
                  className="shadow-xl rounded-full h-auto align-middle border-none relative flex m-16 ml-20 lg:ml-16"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
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
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  Hey! I'm Colin. I'm a software engineer specializing in JavaScript and Python.
                  This website consists of small samples of my work in software engineering, music, and photography. 
                  Feel free to check out my Facebook, LinkedIn, Instagram, and Github using the icons on the top right of this page. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};


export default Bio;