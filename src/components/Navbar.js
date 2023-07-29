import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin , faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
        nocolin
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center justify-between" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
        <li className="nav-item">
          <Link to="/background" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/spotify" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            My Spotify
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            Gallery
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.facebook.com/colincno">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="leading-lg text-white opacity-75" />
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.linkedin.com/in/colincno">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="leading-lg text-white opacity-75" />
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.instagram.com/nocolin_">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="leading-lg text-white opacity-75" />
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.github.com/kcnminus">
            <FontAwesomeIcon icon={faGithub} size="lg" className="leading-lg text-white opacity-75" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar