import { useState, useEffect } from "react"
import logo from './../assets/logo.svg';
import Navigation from './Navigation'
import { MdSearch } from "react-icons/md";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 80;
        if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
        }
    };

    document.addEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = (e) => {
        const menuButton = document.querySelector(".menu-button")
        const menuList = document.querySelector(".site-navigation")
        menuButton.classList.toggle('opened')
        menuList.classList.toggle('opened')
    }

    return (
    <header className="header" data-scroll={scrolled} role="banner">
        <div className="inner-block">
            <button className="menu-button" aria-label="Main Menu" onClick={toggleMenu}>
                <svg width="32" height="32" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div className="logo-header">
                <a href="/">
                    <img src={logo} alt="Purple Circles"/>
                </a>
            </div>
            <Navigation/>
            <div className="search-header">
                <span class="search-label">Search</span> 
                <MdSearch className="react-icon" size="24px"/>
            </div>
        </div>
    </header>
    )
}

export default Header