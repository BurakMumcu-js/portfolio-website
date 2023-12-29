import React from "react";

export default function HomeServices(props) {
    const {service} = props;
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="sectionBox">
                <div className="sectionWords">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

