import React from "react";
import "./About.css";
import Resume from "./Resume.pdf";
import { motion } from "framer-motion";

const About = () => {
  const detail = [
    {
      title: "Email",
      data: "sanjaykalsariya2002@gmail.com",
    },
    {
      title: "Age",
      data: "23",
    },
    {
      title: "Phone",
      data: "+91 963 802 6213",
    },
    {
      title: "Degree",
      data: "BE IT",
    },

    {
      title: "Country",
      data: "India",
    },
    {
      title: "Freelancer",
      data: "Available",
    },
  ];
  const skill = [
    {
      title: "HTML5, CSS3 and CSS libraries",
      per: "96%",
    },
    {
      title: "Javascript",
      per: "90%",
    },
    {
      title: "Git & Github",
      per: "95%",
    },
    {
      title: "PHP & MYSQL",
      per: "80%",
    },
    {
      title: "React & ReactJS",
      per: "85%",
    },
    {
      title: "Angular & Angular JS",
      per: "95%",
    },
    {
      title: "NODE JS & Express JS & MONGODB",
      per: "75%",
    },
    {
      title: "ASP.NET Core, ASP.NET MVC & .NET Razor Pages",
      per: "95%",
    },
    {
      title: "JIRA & BitBucket",
      per: "95%",
    },
    {
      title: "AWS Cloud Platform",
      per: "70%",
    },
  ];
  const education = [
    {
      date: "2020-2024",
      title: "BE IT",
      text: "I graduated from L.D. College of Engineering, Ahmedabad, with a CPI of 8.40 out of 10.",
    },
    {
      date: "2018-2020",
      title: "Higher Secondary Certificate",
      text: "High School with Mathematics (Percentage: 82%).",
    },
  ];
  const experiance = [
    {
      date: "2024 - Present",
      title: "JR. Software Enginerring",
      text: "During my 1+ Year at Samyak Infotech Private Limited, I honed my software engineering skills with a focus on .NET and Angular technologies. This valuable experience, gained within the current time frame, provided me with practical insights into professional development practices.",
    },
    {
      date: "2023",
      title: "Python With AI Intern",
      text: "Under the Student Start-up and Innovation Policy (SSIP) and Gujarat Knowledge Society, I was recognized for participating in the Regional Round of Azadi Ka Amrit Mahotsav Hackathon 2022, held on October 7th & 8th at L.D. College of Engineering, Ahmedabad.Our project, 'Sinkhole Monitoring System', focused on understanding how sinkholes occur and how they can be detected. The system aimed to provide real-time updates on sinkhole locations via a website, sharing details with authorities like the Ahmedabad Municipal Corporation (AMC) to ensure timely action and public safety.",
    },
    {
      date: "2022",
      title: "software developer",
      text: "I completed a 3-month internship as a MERN Stack Developer at Kalathiya Infotech. During this time, I worked on real-time projects, including an e-commerce system and a library management system, gaining hands-on experience in MERN technologies. Additionally, I contributed to projects in the PHP domain, further expanding my technical skill set.",
    },
    {
      date: "2022",
      title: "Azadi ka Amrit Mahotsav Hackathon 2022",
      text: "Student Start-up and Innovation Policy(SSIP) and Gujrat Knowledge Society appreciate us for Participating in the Regional Round of Azadi ka Amrit Mahotsav Hackathon 2022, during the 7th & 8th of October at LD College Of Engineering, Ahmedabad. The project named 'Sinkhole Monitering system '. The project is mainly focused on How sinkhole occurs and how can it be detected? All the state is informed that all the details of where the sinkhole has fallen will be shown on our website and it will be provided to the AMC.",
    },
  ];
  return (
    <section className="about section " id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3>
                  I'm sanjay kalsariya and <span>Full Stack Developer</span>
                </h3>
                <p>
                  Full Stack Developer who focuses on writing clean, elegant,
                  and efficient code. Passionate about building dynamic web
                  applications using .NET, Angular, and MERN stack. Enjoy
                  working with HTML5, CSS3, and always ready to add a touch of
                  jQuery for interactive user experiences.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  {detail.map((item, index) => (
                    <div className="info-item padd-15" key={index}>
                      <p>
                        {item.title} : <span>{item.data}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="buttons">
                    <a href={Resume} view="resume.pdf">
                      <button className="btn ">View CV</button>
                    </a>
                    <a href={Resume} download="resume.pdf">
                      <button className="btn ">Download CV</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="skills padd-15">
                <motion.div
                  whileInView={{}}
                  transition={{ scale: [0, 1], opacity: [0, 1] }}
                  className="row"
                >
                  {skill.map((item, index) => (
                    <div className="skill-item padd-15" key={index}>
                      <h5>{item.title}</h5>
                      <div className="progress">
                        <div
                          className="progress-in "
                          style={{ width: `${item.per}` }}
                        ></div>
                        <div className="skill-percent">{item.per}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* timeline item */}
                      {education.map((item, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            {item.date}
                          </h3>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* timeline item  */}
                      {experiance.map((item, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            {item.date}
                          </h3>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
