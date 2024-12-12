import React from 'react';
import "./Services.css";

const Services = () => {
    const detail = [
        {
            icon: <i className="fa fa-mobile-alt"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
        {
            icon: <i className="fa fa-laptop-code"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
        {
            icon: <i className="fa fa-palette"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
        {
            icon: <i className="fa fa-code"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
        {
            icon: <i className="fa fa-search"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
        {
            icon: <i className="fa fa-bullhorn"></i>,
            title: "Web Design",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        },
    ]
    return (
        <section className="service section " id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    {/* service item   */}
                    {detail.map((item, index) => (
                        <div className="service-item padd-15" key={index}>
                            <div className="service-item-inner">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Services;
