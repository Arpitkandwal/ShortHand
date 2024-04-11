import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <div className="background-container">
    <nav className={`navbar ${navActive ? "active" : ""} ${scrolled ? 'scrolled' : ''}`}>
        <img src="/logo.jpeg" alt="" width={40}  />
      <div>
        <h2 className="navbar-brand text-white">Sarthak_Shorthand</h2>
      </div>
      <div className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}  >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar--items font-bold ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="Slider"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="AboutUs"
              className="navbar--content"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="Gallery"
              className="navbar--content"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;


// import React from 'react';
// import { Link } from 'react-scroll';
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [navActive, setNavActive] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       if (scrollTop > 0) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu();
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener('scroll', handleScroll);


//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu();
//     }
//   }, []);

//   return (
//     <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         {/* Centered brand name */}
//         <a className="navbar-brand" href="/">Sarthak_Shorthand</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//           {/* Moved list items to the right side */}
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="Contact"
//               className="navbar--content"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="Contact"
//               className="navbar--content"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="Contact"
//               className="navbar--content"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="Contact"
//               className="navbar--content"
//             >
//               Contact Us
//             </Link>
//           </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

