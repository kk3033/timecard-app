// import React from 'react'

// function NavigationBar() {
//   return (
//     <div>NavigationBar</div>
//   )
// }

// export default NavigationBar

import React from "react";
// import logoMark from '@/app/images/CM_Logo.jpg';
const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
              {/* <img src={logoMark} alt="Cooperate logo" /> */}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Login
              </a>
              {/* <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                SignUp
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
