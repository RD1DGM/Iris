import React, { useRef, useEffect } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  

  const config = {
    root: null,
    rootMargin: '-88% 0px 0px 0px',
    threshold: 0
  };

  const config2 = {
    root: null,
    rootMargin: '-50% 0px 0px 0px',
    threshold: 0
  };

  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      !entry.isIntersecting
        ? ref.current.classList.add('navbar_scrolled')
        : ref.current.classList.remove('navbar_scrolled');
    });
  }, config);

  const observer2 = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      !entry.isIntersecting
        ? ref3.current.classList.add('navbar_logo_scrolled')
        : ref3.current.classList.remove('navbar_logo_scrolled');
    });
  }, config);

  const observer3 = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      !entry.isIntersecting
        ? ref2.current.classList.add('navbar_links_scrolled')
        : ref2.current.classList.remove('navbar_links_scrolled');
    });
  }, config);

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      !entry.isIntersecting
        ? ref.current.classList.add('navbar_hidden')
        : ref.current.classList.remove('navbar_hidden') &&
          ref.current.classList.add('navbar_scrolled') &&
          ref2.current.classList.add('navbar_links_scrolled');
    });
  }, config2);

  useEffect(() => {
    observer.observe(document.getElementById('landing_1'));
    observer4.observe(document.getElementById('landing_2'));
    observer3.observe(document.getElementById('landing_1'));
    observer2.observe(document.getElementById('landing_1'));
  }, []);

  return (
    <div className="navbar" ref={ref}>
      <div className="navbar_logo" ref={ref3} />
      <div className="navbar_links" ref={ref2}>
        <a href="#">PROMOTE</a>
        <a href="#">NEWS</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
