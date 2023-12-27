import React from "react";

export default function Footer () {
    return(
        <footer>
        <div className="container">
          <div className="footerContainer">
            <div className="footerNav">
              <p><a href="#about">About me</a></p>
              <p><a href="#services">services</a></p>
              <p><a href="./template/portifolio.html">Portifolio</a></p>
              <p><a href="#contact">contact me</a></p>
            </div>
            <div className="footerMedias">
              <div className="footerMedia">
                <a href="https://www.linkedin.com/in/laura-irene-paul"
                  ><i className="fab fa-linkedin-in"></i
                ></a>
              </div>
              <div className="footerMedia">
                <a href="https://www.facebook.com/irene.mmassy.1466"
                  ><i className="fab fa-facebook-f"></i
                ></a>
              </div>
              <div className="footerMedia">
                <a href="https://www.instagram.com/minaheryy/"
                  ><i className="fab fa-instagram"></i
                ></a>
              </div>
              <div className="footerMedia">
                <a href="https://www.behance.net/laummassy01ce"
                  ><i className="fab fa-behance"></i
                ></a>
              </div>
              <div className="footerMedia">
                <a href="https://github.com/irenemmassy"
                  ><i className="fab fa-github-alt"></i
                ></a>
              </div>
            </div>
            <span>Copyright ©2020 All rights reserved </span>
          </div>
        </div>
      </footer>
    )
}