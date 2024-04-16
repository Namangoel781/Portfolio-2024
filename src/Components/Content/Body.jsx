import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div className="head" id="Body">
      <div className="body">
        <h3>Projects</h3>
      </div>
      <div className="box">
        <div className="projects">
          <a
            target="_blank"
            href="https://github.com/Namangoel781/Flipkart-Clone"
          >
            <img
              src="./images/Flipkart-logo.png"
              style={{ backgroundColor: "#000" }}
              alt=""
            />
          </a>
          <div className="project-body">
            <h5 className="title">Flipkart-Clone</h5>
            <div className="logo">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
            </div>
          </div>
        </div>

        <div className="projects">
          <a
            target="_blank"
            href="https://github.com/Namangoel781/Airbnb-Clone"
          >
            <img src="./images/airbnb.jpeg" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">Airbnb-Clone</h5>
            <div className="logo">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
            </div>
          </div>
        </div>

        <div className="projects">
          <a target="_blank" href="https://github.com/Namangoel781/mac">
            <img src="./images/ecomm.png" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">Swift Cart</h5>
            <div className="logo">
              <img src="./images/dj.png" alt="" />
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
            </div>
          </div>
        </div>

        <div className="projects">
          <a
            target="_blank"
            href="https://github.com/Namangoel781/VIdeo-chat2.0"
          >
            <img src="./images/connect.jpg" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">Connect-Video Call</h5>
            <div className="logo">
              <img src="./images/dj.png" alt="" />
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
            </div>
          </div>
        </div>

        <div className="projects">
          <a target="_blank" href="https://github.com/Namangoel781/mac">
            <img src="./images/netcore.jpg" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">Company Website</h5>
            <div className="logo">
              <img src="./images/dj.png" alt="" />
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
            </div>{" "}
          </div>
        </div>

        {/* <div className="projects">
          <a
            target="_blank"
            href="https://github.com/Namangoel781/ClapStation-2"
          >
            <img src="./images/clap.png" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">ClapStation</h5>
            <div className="logo">
              <img src="./images/dj.png" alt="" />
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-solid fa-database"></i>
            </div>{" "}
          </div>
        </div> */}

        <div className="projects">
          <a
            target="_blank"
            href="https://github.com/Namangoel781/ClapStation-2"
          >
            <img src="./images/disney.jpg" alt="" />
          </a>
          <div className="project-body">
            <h5 className="title">Disney Clone</h5>
            <div className="logo">
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
