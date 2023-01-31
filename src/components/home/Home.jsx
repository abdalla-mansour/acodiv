import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div class="landing" id="home">
      <div class="intro-text">
        <h1>شركه أكوديف </h1>
        <p>نرحب بعملائنا الجدد أمتلك الان موقعك الالكتروني</p>
        <div className="button">
          <a href="https://wa.me/+0201068978663">
            <button className="btn">اطلب الان</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;