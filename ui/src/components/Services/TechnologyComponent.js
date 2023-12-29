import React from "react";

export default function HomeTechnologys(props) {
    const {Technology} = props;
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="sectionBox">
                <div className="sectionWords">
                    <h4>{Technology.title}</h4>
                    <ul>
                        {Technology.techs.map( (tech)=> (
                                <li key={tech.id}>
                                    {tech.name}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}