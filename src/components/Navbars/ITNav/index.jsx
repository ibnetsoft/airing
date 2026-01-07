import { useEffect, useRef } from 'react';
import Link from 'next/link';
import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark style-2 position-absolute w-100 p-0" ref={navbarRef}>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/assets/img/logo_ll.png" alt="" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://chart.airing.work">
                <a className="nav-link" target="_blank" rel="noopener noreferrer">
                  chart
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar