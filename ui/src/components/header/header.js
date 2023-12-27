import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Header(props){
    return(
        <header className={`header-${props.bgColor || "white" } `}>
        <div className="container">
          <div className="nav">
            <div className="nav1"></div>
            <div className="nav2">
              <div className="menu"><HashLink to="/#about">About me</HashLink></div>
              <div className="menu"><HashLink to="/#services">services</HashLink></div>
              <div className="menu">
              <HashLink to="/portfolio">portfolio</HashLink>
              </div>
              <div className="menu"><HashLink to="/#contact">contact me</HashLink></div>
            </div>
           <div id="opened" onclick="openNav()">&#9776;</div>
          </div>
        </div>
      </header>
    )
}