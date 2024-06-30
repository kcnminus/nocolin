import React, { useEffect, useRef } from 'react';
import ReactGithubCalendar from 'react-github-calendar';

const Background = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-300 w-full mb-6 shadow-xl rounded-lg mt-16 md:mt-32">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            </div>
          <div className="text-center mt-8 md:mt-12">
            <h3 className="text-3xl md:text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              About Me
            </h3>
          </div>
          <div className="mt-10 py-10 border-t border-gray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-20 text-lg leading-relaxed text-gray-800">
                   Though I didn't know it at the time, I first started learning to code in the heyday of MySpace and Xanga, customizing my homepage using HTML and CSS. I went to a pretty well-known STEM-focused high school in New York City, but it took me a long time to really learn the possibilities of code. 

                   I have been working to improve myself at least a little bit every day. Whether that's through diet or exercise, web dev, or creative work, my goal each day is to surpass the person I was yesterday. 
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-30" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Background