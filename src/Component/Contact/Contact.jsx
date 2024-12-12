import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Contact.css";
import swal from "sweetalert";


const Contact = () => {
  const [sendMeg, setSendMeg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isActive,setIsActive] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSendMeg({ ...sendMeg, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsActive(true);
    const { name, email, subject, message } = sendMeg;
    console.log(sendMeg);
    if (name === "" || email === "" || subject === "") {
      swal("Not valid", "Please fill all the details !!", "warning");
      setIsActive(false);
    } else {
      var datastore = JSON.stringify({
        name,
        email,
        subject,
        message,
      });
      try {
        const response = await axios({
          method: "post",
          url: "https://skportfolio-api.onrender.com/contact",
          headers: {
            "Content-Type": "application/json",
          },
          data: datastore,
        });

        if (response.status === 201) {
          console.log("contact data successfully added");
          swal("success", "contact data successfully added", "success");
        }
      } catch (err) {
        console.log("Data already store !!");
        swal("Oops!", "Data already store !", "error");
        setIsActive(false);
      }
    }
  };

  function sendEmail() {
    var mail = "mailto:sanjaykalsariya2002@gmail.com";
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  }
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
        <div className="row ">
          {/* contact info item   */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>Call Us On</h4>
            <p>+91 9638026213</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p onClick={sendEmail} style={{ cursor: "pointer" }}>
              sanjaykalsariya2002gmail.com
            </p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-globe-europe"></i>
            </div>
            <h4>Website</h4>
            <p>-</p>
          </div>
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'M CERY RESPONSIVE TO MESSAGES
        </h4>
        {/* contact form  */}
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control name"
                    id="name"
                    name="name"
                    value={sendMeg.name}
                    placeholder="Name"
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control email"
                    id="email"
                    name="email"
                    value={sendMeg.email}
                    placeholder="Email"
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control subject"
                    id="subject"
                    name="subject"
                    value={sendMeg.subject}
                    placeholder="Subject"
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control message"
                    id="message"
                    value={sendMeg.message}
                    placeholder="Message"
                    onChange={handleChangeInput}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className={`btn btn-contact`} onClick={handleSubmit} disabled={isActive}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
