import React from "react";
import "./portfolio.css";
import Fade from "react-reveal/Fade";
import Personal1 from "../../assets/portfolio/personal1.jpg";
import Personal2 from "../../assets/portfolio/personal2.jpg";
import Personal3 from "../../assets/portfolio/personal3.jpg";
import Personal5 from "../../assets/portfolio/personal5.jpg";
import Game2 from "../../assets/portfolio/game2.jpg";
import Game4 from "../../assets/portfolio/game4.jpg";
import Office1 from "../../assets/portfolio/office1.PNG";
import Office2 from "../../assets/portfolio/office2.jpg";
import Office3 from "../../assets/portfolio/office3.jpg";
import Office5 from "../../assets/portfolio/office5.jpg";
import Shopping1 from "../../assets/portfolio/shopping1.jpg";
import Cloud1 from "../../assets/portfolio/cloud1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Fade top>
        <h2>أعمالنا</h2>
      </Fade>
      <div className="project">
        <div id="one" eventKey="first">
          {" "}
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/personalone.github.io/">
                <img src={Personal1} alt="" />
              </a>
              <div className="content">
                <h3>موقع شخصي</h3>
                <p>
                  <span className="para">Html </span>
                  <span className="para"> Css</span>
                  <span className="para"> JS</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/personalthree.github.io/">
                <img src={Personal3} alt="" />
              </a>
              <div className="content">
                <h3>موقع شخصي</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Scss</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/personaltwo.github.io/">
                <img src={Personal2} alt="" />
              </a>
              <div className="content">
                <h3>موقع شخصي</h3>
                <p>
                  <span className="para">Html </span>
                  <span className="para"> Css</span>
                  <span className="para"> JS</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
        </div>
        <div id="two" eventKey="second">
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/personalfour.github.io/">
                <img src={Personal5} alt="" />
              </a>
              <div className="content">
                <h3>موقع شخصي</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Tailwind</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/travelone.github.io/">
                <img src={Game2} alt="" />
              </a>
              <div className="content">
                <h3>موقع سفاري</h3>
                <p>
                  <span className="para">Html </span>
                  <span className="para"> Css</span>
                  <span className="para"> JS</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/gemone.github.io/">
                <img src={Game4} alt="" />
              </a>
              <div className="content">
                <h3>موقع جيم</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Css</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
        </div>
        <div id="three" eventKey="third">
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/bankone.github.io/">
                <img src={Office3} alt="" />
              </a>
              <div className="content">
                <h3>موقع بنك</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Tailwind</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/bitcoinone.github.io/">
                <img src={Office2} alt="" />
              </a>
              <div className="content">
                <h3>موقع عملات افتراضيه</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Tailwind</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/officeone.github.io/">
                <img src={Office1} alt="" />
              </a>
              <div className="content">
                <h3>موقع مكتب</h3>
                <p>
                  <span className="para">Html </span>
                  <span className="para"> Css</span>
                  <span className="para"> Jquery</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
        </div>
        <div id="four" eventKey="fourt">
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/shoppingone.github.io/">
                <img src={Shopping1} alt="" />
              </a>
              <div className="content">
                <h3>متجر الكتروني</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Scss</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/cloudone.github.io/">
                <img src={Cloud1} alt="" />
              </a>
              <div className="content">
                <h3>موقع بيانات</h3>
                <p>
                  <span className="para">React </span>
                  <span className="para"> Tailwind</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="box">
              <a href="https://abdalla-mansour.github.io/officetwo.github.io/">
                <img src={Office5} alt="" />
              </a>
              <div className="content">
                <h3>موقع مكتب</h3>
                <p>
                  <span className="para">Html </span>
                  <span className="para"> Css</span>
                  <span className="para"> JS</span>
                </p>
              </div>
              <div className="info"></div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
