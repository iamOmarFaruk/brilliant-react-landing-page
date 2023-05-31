import React, { useState, useEffect } from 'react';
function Navbar () {
  const [blackBg, setBlackBg] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuClose, setmobileMenuClose] = useState('slide-left');

  function toggleMobileMenu () {
    setMobileMenu(!mobileMenu);
  }

  function mobileMenuCloseHandeler () {
    setmobileMenuClose('slide-left-out')
   setTimeout(() => {
     setmobileMenuClose('slide-left')
     setMobileMenu(!mobileMenu);
   },300);

  }

 




  useEffect(() => {




    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setBlackBg(true);
      } else {
        setBlackBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* ======= Header ======= */}
      <header id="header" className={`fixed-top ${blackBg ? "blackBg" : ""}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="">Brilliant</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#pricing">
                  Pricing
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#faq">
                  FAQ
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileMenu} />
          </nav>
          {/* .navbar */}
        </div>


        {mobileMenu &&
          <div onClick={mobileMenuCloseHandeler} id="myNav" className={`overlay ${mobileMenuClose}`}>
            {/* Button to close the overlay navigation */}
            <a className="closebtn" onClick={mobileMenuCloseHandeler}>×</a>
            {/* Overlay content */}
            <div className="overlay-content">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        }




      </header>
      {/* End Header */}
    </div>
  );
}

export default Navbar