import React from "react";
import "./service.css";
import { MdSignalWifi1Bar } from "react-icons/md";
import { MdSignalWifi2Bar } from "react-icons/md";
import { MdSignalWifi4Bar } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const services = () => {
  return (
    <section className="services" id="service">
      <Fade top>
        <h2>الخدمات</h2>
      </Fade>
      <div className="container">
        <Zoom left delay={100}>
          <div className="service">
            <span>
              <MdSignalWifi1Bar />
            </span>
            <h3>المستوي الفضي</h3>
            <div className="details-r">
              <div>
                <BsCheck2Circle />
                <p>موقع لشركتك</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>صفحه واحده</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>دومين مجانا</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>شهاده أمان</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>احصائيه كل شهر</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>مده التسليم أسبوع</p>
              </div>
            </div>
            <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
              <button className="btns">اطلب الان</button>
            </a>
          </div>
        </Zoom>
        <Zoom bottom delay={100}>
          <div className="service">
            <span>
              <MdSignalWifi2Bar />
            </span>
            <h3>المستوي الذهبي</h3>
            <div className="details-r">
              <div>
                <BsCheck2Circle />
                <p>موقع لشركتك</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>خمس صفحات</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>دومين مجانا</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>شهاده أمان</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>احصائيه كل شهر</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>مده التسليم أسبوعين</p>
              </div>
            </div>
            <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
              <button className="btns">اطلب الان</button>
            </a>
          </div>
        </Zoom>
        <Zoom right delay={100}>
          <div className="service">
            <span>
              <MdSignalWifi4Bar />
            </span>
            <h3>المستوي الماسي</h3>
            <div className="details-r">
              <div>
                <BsCheck2Circle />
                <p>موقع لشركتك</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>عشره صفحات</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>دومين مجانا</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>شهاده أمان</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>احصائيه كل شهر</p>
              </div>
              <div>
                <BsCheck2Circle />
                <p>مده التسليم أسبوعين</p>
              </div>
            </div>
            <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
              <button className="btns">اطلب الان</button>
            </a>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default services;
