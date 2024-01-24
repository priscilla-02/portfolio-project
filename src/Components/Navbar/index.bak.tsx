import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header
      className={`desktop:min-w-[1000px] ${
        showMenu ? 'h-screen desktop:h-auto' : ''
      }`}
    >
      {/* <header className="desktop:min-w-[1000px]"> */}
      <div className="flex text-TK h-[200px] desktop:w-auto w-screen">
        {/* <div className="flex bg-TK-background text-white h-[200px] desktop:w-auto w-screen"> */}
        <div className="w-full h-24 flex items-center justify-end">
          <div
            className="cursor-pointer block desktop:hidden"
            onClick={() => setShowMenu(prev => !prev)}
          >
            <button className=" w-24">
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
        </div>
        {showMenu && (
          <div className="flex-col desktop:hidden">
            <Link to={'/'}>
              <div className="flex pr-3 pl-3">
                <div className="mt-7 text-xs desktop:text-sm font-bold">
                  Home
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
              <div className="flex pr-3 pl-3">
                <div className="mt-7 text-xs desktop:text-sm font-bold">
                  About
                </div>
              </div>
            </Link>
            <Link to={'/contact'}>
              <div className="flex pr-3 pl-3">
                <div className="mt-7 text-xs desktop:text-sm font-bold">
                  Contact
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
