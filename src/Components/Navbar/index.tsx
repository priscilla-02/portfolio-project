import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div
      className={`h-auto block desktop:hidden bg-slate-500 ${
        expandNavbar ? '' : ''
      }`}
    >
      <div className="w-full h-24 flex items-center justify-end">
        <button
          onClick={() => {
            setExpandNavbar(prev => !prev);
          }}
          className="mr-5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={`w-full h-full flex items-center justify-center  ${
          expandNavbar ? 'flex-col justify-start mt-24' : 'hidden'
        }`}
      >
        <Link
          className={`w-full text-center ${
            expandNavbar ? 'w-full text-center m-8' : 'hidden'
          }`}
          to="/"
          onClick={() => {
            setExpandNavbar(false);
          }}
        >
          Home
        </Link>
        <Link
          className={`w-full text-center ${
            expandNavbar ? 'w-full text-center m-8' : 'hidden'
          }`}
          to="/projects"
          onClick={() => {
            setExpandNavbar(false);
          }}
        >
          Projects
        </Link>
        <Link
          className={`w-full text-center ${
            expandNavbar ? 'w-full text-center m-8' : 'hidden'
          }`}
          to="/contact"
          onClick={() => {
            setExpandNavbar(false);
          }}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
