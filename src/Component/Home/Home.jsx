import React from "react";
import "./Home.css";
import Profile from "../../Image/profile.png";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Home = () => {
  return (
    <section className="home section " id="home">
      <div className="container">
        <div className="row">
          <motion.div
            whileInView={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="home-info padd-15"
          >
            <h3 className="hello">
              Hello,my name is <span className="name">sanjay kalsariya</span>
            </h3>
            <h3 className="my-profession">
              I' m a{" "}
              <Typical
                className="typing"
                steps={[
                  "",
                  1000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Full stack developer",
                  2000,
                  "DotNet Developer",
                  2000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h3>
            <p>
              Hello! I'm Sanjay Kalsariya, a dedicated and passionate web
              developer specializing in designing and developing dynamic,
              visually appealing, and responsive websites. With expertise in
              both front-end and back-end development, I strive to create
              seamless, user-friendly interfaces that enhance the overall user
              experience.
            </p>
            <p className="margin-bottom">
              My skills encompass crafting interactive and engaging web
              applications using modern technologies, ensuring robust
              performance, scalability, and aesthetic design. I am committed to
              delivering quality solutions tailored to meet diverse client needs
              while staying updated with the latest industry trends.
            </p>
            <a href="#contact" className="btn hire-me">
              Hire Me
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [0, -50], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="home-img padd-15"
          >
            <img src={Profile} alt="profile" />
          </motion.div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
