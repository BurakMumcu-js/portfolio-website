import React from "react";

export default function Header(){
    return(
        <header className="header-black">
        <div className="container">
          <div className="nav">
            <div className="nav1"></div>
            <div className="nav2">
              <div className="menu"><a href="#about">about Me</a></div>
              <div className="menu"><a href="#services">services</a></div>
              <div className="menu">
                <a href="./template/portifolio.html">Portifolio</a>
              </div>
              <div className="menu"><a href="#contact">contact Me</a></div>
            </div>
           <div id="opened" onclick="openNav()">&#9776;</div>
          </div>
        </div>
      </header>
    )
}