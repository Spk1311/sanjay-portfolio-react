import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import walkingcat from "./img/walkingcat.jpg";
import photopix from "./img/photopix.png";
import travel_website from "./img/travel_website_img.png";
import meal_khuj_app from "./img/meal-khuj-app.png";
import wheather from "./img/wheather.jpg";
import hrm_img from "./img/hrm_img.jpg";
import healthzest from "./img/healthzest.jpg";
import bookStoreApp from "./img/book-store-app.png";
import imdbClone from "./img/imdb-clone.png";

const Portfolio = () => {
  const portfolio = [
    {
      title: "web dev",
      description: "This is a walking cat.",
      projectLink: "https://spk1311.github.io/WALKING-CAT-ANIMATION/",
      codeLink: "https://github.com/Spk1311/WALKING-CAT-ANIMATION",
      imgURL: walkingcat,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is a weather check App",
      projectLink: "https://wheather-o0zoiml3p-spk1311.vercel.app/",
      codeLink: "https://github.com/Spk1311/wheatherApp",
      imgURL: wheather,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is a photopix .",
      projectLink: "https://spk1311.github.io/PhotoPiX/project.html",
      codeLink: "https://github.com/Spk1311/PhotoPiX",
      imgURL: photopix,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is a travel Application",
      projectLink: "http://sktravel.ml",
      codeLink: "https://github.com/Spk1311/travel-website",
      imgURL: travel_website,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is a human resource management",
      projectLink: "http://hrm.liveblog365.com/",
      codeLink: "https://github.com/Spk1311/human-resource-management",
      imgURL: hrm_img,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is a Doctor's Appointment System",
      projectLink: "http://doctor-appoitment.liveblog365.com/",
      codeLink: "https://github.com/Spk1311/HealthZest",
      imgURL: healthzest,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is meal-khuj-app",
      projectLink: "https://meal-khuj-app.vercel.app/",
      codeLink: "https://github.com/Spk1311/MealKhuj-app",
      imgURL: meal_khuj_app,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is Book-Store-app",
      projectLink: "http://book-store-app.unaux.com/",
      codeLink: "https://github.com/Spk1311/BookStore_App",
      imgURL: bookStoreApp,
      tags: ["Web App"],
    },
    {
      title: "web dev",
      description: "This is IMDB-Clone-App",
      projectLink: "https://movies-world-imdb.netlify.app/",
      codeLink: "https://github.com/Spk1311/IDMB-Clone",
      imgURL: imdbClone,
      tags: ["Web App"], 
    },
  ];
  return (
    <section className="portfolio section " id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>PortFolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>

        {/* main function  */}
        <div className="row">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {portfolio.map((work, index) => (
              <div className="app__work-item " key={index}>
                <div className="app__work-img ">
                  <img src={work.imgURL} alt={work.title} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover "
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex-ai"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex-ai"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className="app__work-content app_center-item">
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {work.description}
                  </p>

                  <div className="app__work-tag ">
                    <p className="p-text">{work.tags[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
