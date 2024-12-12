/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const clickToggle = () => {
    if (toggle) {
      setToggle(false);
      console.log("false");
    } else {
      setToggle(true);
      console.log("true");
    }
  };

  return (
    <div className="full-body">
      <div className="aside ">
        <div className="logo">
          <main className="container-ring">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </main>
          <div className="logo-name">
            <a href="#home" className="logo-name">
              <span>Sanjay</span>
            </a>
          </div>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <div className="Nav_link">
          <ul className="nav">
            <motion.div
              whileInView={{ y: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <li>
                <a href="#home">
                  <i className="fa fa-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa fa-user"></i>About
                </a>
              </li>
              {/* <li>
                <a href="#services">
                  <i className="fa fa-list"></i>Services
                </a>
              </li> */}
              <li>
                <a href="#portfolio">
                  <i className="fa fa-briefcase"></i>Portfolio
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa fa-comments"></i>Contact
                </a>
              </li>
            </motion.div>
          </ul>
        </div>
        <div className="link-icon">
          <a
            href="https://www.linkedin.com/in/sanjay-kalsariya-821197222/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icon-aside" />
          </a>
          <a href="https://github.com/Spk1311" target="_blank" rel="noreferrer">
            <BsGithub className="icon-aside" />
          </a>
          <a
            href="https://www.instagram.com/sp_kalsariya_315/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="icon-aside" />
          </a>
          <a
            href="https://twitter.com/sanjayk71456151"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="icon-aside" />
          </a>
        </div>
      </div>
      <div className="toggle-side">
        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          size="lg"
          onClick={clickToggle}
        />
        {toggle && (
          <div className="aside">
            <div className="font-under-svg">
              <FontAwesomeIcon
                icon={toggle ? faXmark : faBars}
                size="lg"
                onClick={clickToggle}
              />
            </div>
            <div className="logo">
              <main className="container-ring">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
              </main>
              <div className="logo-name">
                <a href="#" className="logo-name">
                  <span>Sanjay</span>
                </a>
              </div>
            </div>
            <div className="nav-toggler">
              <span></span>
            </div>
            <div className="Nav_link">
              <ul className="nav">
                <motion.div
                  whileInView={{ y: [300, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                >
                  <li>
                    <a href="#home">
                      <i className="fa fa-home"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <i className="fa fa-user"></i>About
                    </a>
                  </li>
                  {/* <li>
                    <a href="#services">
                      <i className="fa fa-list"></i>Services
                    </a>
                  </li> */}
                  <li>
                    <a href="#portfolio">
                      <i className="fa fa-briefcase"></i>Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <i className="fa fa-comments"></i>Contact
                    </a>
                  </li>
                </motion.div>
              </ul>
            </div>
            <div className="link-icon">
              <a
                href="https://www.linkedin.com/in/sanjay-kalsariya-821197222/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="icon-aside" />
              </a>
              <a
                href="https://github.com/Spk1311"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="icon-aside" />
              </a>
              <a
                href="https://www.instagram.com/sp_kalsariya_315/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="icon-aside" />
              </a>
              <a
                href="https://twitter.com/sanjayk71456151"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="icon-aside" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
