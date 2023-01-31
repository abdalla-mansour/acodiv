import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import './footer.css';

const Footer = () => {
  return (
    <div id="footer" className="w-full mt-24 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-orange-300 py-8">
        <Fade left>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">الحلول</h6>
            <ul>
              <li className="py-1">تسويق</li>
              <li className="py-1">تحليلات</li>
              <li className="py-1">تجارة</li>
              <li className="py-1">بيانات</li>
              <li className="py-1">سحابه</li>
            </ul>
          </div>
        </Fade>
        <Fade right delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">الدعم</h6>
            <ul>
              <li className="py-1 hover:text-[#c09973]">
                <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
                  التسعير
                </a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="https://wa.me/+0201068978663">التوثيق</a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
                  المستوي الفضي
                </a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
                  المستوي الذهبي
                </a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار المستويات">
                  المستوي الماسي
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade left delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">روابط الموقع</h6>
            <ul>
              <li className="py-1 hover:text-[#c09973]">
                <a href="#home">الرئيسيه</a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="#service">الخدمات</a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="#portfolio">أعمالنا</a>
              </li>
              <li className="py-1 hover:text-[#c09973]">
                <a href="#contact">التواصل</a>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade right delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">قانوني</h6>
            <ul>
              <li className="py-1">المطالبات</li>
              <li className="py-1">خصوصية</li>
              <li className="py-1">شروط</li>
              <li className="py-1">سياسات</li>
            </ul>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="py-6 pr-4">شراء دومين خاص بيك مع أستضافه</p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-1 rounded-md mb-4"
                type="email"
                placeholder="اكتب الايميل"
              />
              <a href="https://wa.me/+0201068978663">
                <button className="p-2 mb-4 hover:text-[#c09973]">أرسال</button>
              </a>
            </form>
          </div>
        </Fade>
      </div>
      <Fade top delay={200}>
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
          <p className="py-4">&copy; 2022, جميع الحقوق محفوظة شركه أكوديف</p>
          <div
            id="socail"
            className="flex justify-between sm:w-[75px] pt-4 text-2xl"
          >
            <a className="icon" href="https://t.me/+0201068978663">
              <TbBrandTelegram className="text-gray-400 hover:text-[#c09973]" />
            </a>
            <a className="icon" href="https://wa.me/+0201068978663">
              <FaWhatsapp className="text-gray-400 hover:text-[#c09973]" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
