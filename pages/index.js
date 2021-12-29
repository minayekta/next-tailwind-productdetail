import Head from "next/head";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import OwlCarousel from "react-owl-carousel2";
import Carousel from './../components/Carousel';
import Footer from "../components/Footer";
import SectionVideo from "../components/SectionVideo";
import DetailProduct from "../components/DetailProduct";
export default function Home() {
  const options = {
    items: 4,
    loop: false,
    margin: 10,
    autoplay: false,
    nav: true,
    navText: [
      "<span><i class='fa c-grayB font-60 fa-angle-left'></i></span>",
      "<span><i class='fa c-grayB font-60 fa-angle-right'></i></span>",
    ],
    responsive: {
      300: {
        items: 1,
      },
      400: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  };
  return (
    <div className="rtl">
    <Header/>
      <TopNav />
      <div className="grid relative grid-cols-12 text-right text-white ">
        <div className="bg-red-600 col-span-6 h-34">
          <div className="mt-5">
            <p className="mx-20 text-3xl  mb-4">پروفیل بر 2300 وات</p>
            <p className="mx-20 text-2xl">5901</p>
            <span className="m-20 mt-4 block overflow-y-scroll overscroll-none max-h-md  px-6">
              <p className=" mt-4 text-sm ">
                اگر تا به حال در جریان یک پروژه‌ ساخت و ساز بوده‌ اید حتما می
                ‌دانید که یکی از معمول ‌ترین فعالیت ‌ها در این نوع پروژه ‌ها،
                برش پروفیل‌ مخصوصا برای ساخت چارچوب در و پنجره است. به دلیل
                استحکام فلز، برای ساخت این چارچوب ‌ها از پروفیل ‌های فلزی
                استفاده می ‌شود. به خاطر همین استحکام و سختی، بریدن این پروفیل
                ‌ها کار آسانی نیست.
              </p>
              <p className=" mt-4 text-sm">
                پروفیل ‌بر 355 میلی ‌متری 5901 رونیکس، ابزاری کارآمد و پرقدرت
                برای برش دادن پروفیل ‌های فلزی با مقاطع مختلف است. موتور قدرتمند
                2300 واتی آن، این دستگاه برش فلز را به ابزاری حرفه ‌ای برای ساخت
                گستره‌ بزرگی از انواع سازه‌ های فلزی تبدیل کرده است. همچنین با
                قابلیت تنظیم گونیا، کاربران می ‌توانند برش‌ هایی زاویه‌ دار را
                با این دستگاه اجرا کنند. معمولا در عملیات‌ های برش فلز، مقدار
                زیادی جرقه تولید می ‌شود. برای تضمین حداکثر ایمنی کاربران حین
                برش پروفیل‌ های فلزی، این دستگاه پرکاربرد دارای محافظ قابل تنظیم
                برای هدایت و کنترل جرقه ‌های ناشی از برش است.
              </p>
              <p className=" mt-4 text-sm">
                برای برش یک پروفیل فلزی، نیاز به صفحه یا دیسک برش است. صفحات برش
                عملیات برش فلز را به وسیله سایش انجام می‌ دهند. پروفیل‌ بر 5901
                رونیکس با یک صفحه برش 355 میلی ‌متری باکیفیت و بادوام عرضه می
                ‌شود. بنابراین کاربران می ‌توانند بدون نیاز به خرید جداگانه یک
                صفحه برش، بلافاصله بعد از گشایش جعبه این پروفیل‌ بر، عملیات خود
                را برای برش‌ کاری فلزات شروع کنند.
              </p>
              <p className=" mt-4 text-sm">
                ظرفیت عمق برش ‌کاری این دستگاه بسته به نوع پروفیلی که قرار است
                بریده شود، متفاوت است. به کمک صفحه برش 355 میلی ‌متری داخل جعبه،
                این پروفیل‌ بر می ‌تواند پروفیل ‌هایی با مقطع گرد و دایره را تا
                قطر 130 میلی ‌متر برش دهد. ظرفیت عمق برش ‌کاری این دستگاه برای
                پروفیل‌ هایی با سطح مقطع مربع، 120 میلی‌ متر و برای پروفیل ‌هایی
                با سطح مقطع مستطیل، 120*130 میلی ‌متر است و در نهایت این دستگاه
                می‌ تواند پروفیل‌ هایی با مقطع زاویه‌ دار را تا اندازه‌ 140*140
                میلی ‌متر برش دهد.
              </p>
            </span>
            <div className="m-20 grid grid-cols-3 border-solid border-b border-t border-white py-3 px-3 ">
            <div className="flex flex-col justify-center justify-items-center border-l border-white col-span-1">
                
                <svg
                  id="Group_4482"
                  data-name="Group 4482"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.989"
                  height="24"
                  viewBox="0 0 25.989 24"
                >
                  <g id="insert_drive_file-24px">
                    <path
                      id="Path_2801"
                      data-name="Path 2801"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_2802"
                      data-name="Path 2802"
                      d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8ZM6,20V4h7V9h5V20Z"
                      fill="#fff"
                    />
                    <g
                      id="Ellipse_106"
                      data-name="Ellipse 106"
                      transform="translate(14 8)"
                      fill="#f22d34"
                      stroke="#f22e34"
                      stroke-width="1"
                    >
                      <circle cx="4" cy="4" r="4" stroke="none" />
                      <circle cx="4" cy="4" r="3.5" fill="none" />
                    </g>
                  </g>
                  <g id="settings-24px" transform="translate(11.001 4.568)">
                    <path
                      id="Path_2803"
                      data-name="Path 2803"
                      d="M15.418,10.56a5.477,5.477,0,0,0,.046-.728,4.472,4.472,0,0,0-.054-.728l1.572-1.223a.38.38,0,0,0,.093-.472l-1.486-2.57a.378.378,0,0,0-.457-.17l-1.85.743a5.469,5.469,0,0,0-1.254-.728l-.279-1.966a.375.375,0,0,0-.372-.317H8.4a.367.367,0,0,0-.364.317L7.762,4.684a5.589,5.589,0,0,0-1.254.728l-1.85-.743a.37.37,0,0,0-.457.17L2.722,7.409a.352.352,0,0,0,.093.472L4.387,9.1a4.307,4.307,0,0,0-.015,1.455L2.8,11.783a.38.38,0,0,0-.093.472l1.486,2.57A.378.378,0,0,0,4.65,15l1.85-.743a5.469,5.469,0,0,0,1.254.728l.279,1.966a.381.381,0,0,0,.372.317h2.973a.361.361,0,0,0,.364-.317l.279-1.966a5.31,5.31,0,0,0,1.254-.728l1.85.743a.37.37,0,0,0,.457-.17l1.486-2.57a.358.358,0,0,0-.093-.472ZM9.891,12.619a2.787,2.787,0,1,1,2.787-2.787A2.8,2.8,0,0,1,9.891,12.619Z"
                      transform="translate(-2.662 -2.4)"
                      fill="#fff"
                      stroke="#f22d34"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <span className="block text-center text-sm">
                  نقشه جزئیات
                </span>
              </div>

              <div className="flex flex-col justify-center justify-items-center border-l border-white col-span-1">
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="19.5"
                  viewBox="0 0 22 19.5"
                >
                  <path
                    id="Path_2798"
                    data-name="Path 2798"
                    d="M22.47,5.2A10.571,10.571,0,0,0,21,4.59V16.62A10.288,10.288,0,0,0,17.5,16,10.6,10.6,0,0,0,12,17.58V5.48A10.928,10.928,0,0,0,1.53,5.2.973.973,0,0,0,1,6.08V18.16a.988.988,0,0,0,1,.99,1.065,1.065,0,0,0,.48-.12A8.694,8.694,0,0,1,6.5,18,9.044,9.044,0,0,1,12,20a9.044,9.044,0,0,1,5.5-2,8.582,8.582,0,0,1,4.02,1.04,1.065,1.065,0,0,0,.48.12.994.994,0,0,0,1-.99V6.08A.973.973,0,0,0,22.47,5.2ZM10,16.62a10.189,10.189,0,0,0-7,0V6.71a8.924,8.924,0,0,1,7,.01ZM19,.5l-5,5V15l5-4.5Z"
                    transform="translate(-1 -0.5)"
                    fill="#fff"
                  />
                </svg>
                <span className="block text-center curser-pointer text-sm">
                راهنمای کاربری
              </span>
              </div>
              <div className="flex flex-col justify-center justify-items-center border-l border-white col-span-1 ">
              
              <svg
                className="block"
                id="map_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_2799"
                  data-name="Path 2799"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_2800"
                  data-name="Path 2800"
                  d="M20.5,3l-.16.03L15,5.1,9,3,3.36,4.9A.5.5,0,0,0,3,5.38V20.5a.5.5,0,0,0,.5.5l.16-.03L9,18.9,15,21l5.64-1.9a.5.5,0,0,0,.36-.48V3.5A.5.5,0,0,0,20.5,3ZM10,5.47l4,1.4V18.53l-4-1.4ZM5,6.46,8,5.45v11.7L5,18.31ZM19,17.54l-3,1.01V6.86L19,5.7Z"
                  fill="#fff"
                />
              </svg>
              <span className="block curser-pointer text-center text-sm">
                کاتالوگ
              </span>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img src="/assets/images/Modeling.jpeg" />
        </div>
        <div className="owl-carousel bottom-0 left-0 absolute bg-grey w-full flex">
      <Carousel/>
      </div>
      </div>
      
      <div className="grid grid-cols-12 text-right">
      <div className="col-span-6 bg-red-600 px-20 py-10">
      <p className="text-sm  text-white mb-3"> تضمین عملکرد عالی و دوام بالا با موتور 2300 واتی حرفه ‌ای -
      </p>
      <p className="text-sm text-white mb-3"> مجهز به کلید ضد غبار برای کاهش نفوذ گرد و غبار و افزایش طول عمر محصول -
      </p>
      <p className="text-sm  text-white mb-3"> با قابلیت استفاده برای فعالیت‌ های مداوم و طولانی مدت -</p>
      <p className="text-sm  text-white mb-3"> مجهز به محافظ قابل ‌تنظیم جرقه برای هدایت جرقه‌ها و تضمین ایمنی کاربر -</p>
      <p className="text-sm  text-white mb-3"> دارای قابلیت تنظیم گونیا تا 45 درجه برای برش‌های زاویه‌دار دقیق -</p>
      <p className="text-sm  text-white mb-3"> دارای قابلیت تنظیم در 2 موقعیت برای برش با مقاطع مختلف -</p>
      <p className="text-sm  text-white mb-3"> مجهز به قفل شفت برای تعویض سریع و آسان صفحه‌ برش و افزایش ایمنی کاربر -</p>
      <p className="text-sm text-white mb-3"> مجهز به دستهD  شکل به منظور قرارگیری بهتر در دست و کنترل بیشتر در انجام برش‌ های متنوع -</p>
      <p className="text-sm  text-white mb-3"> دارای گیره قدرتمند و با دقت برای بهبود عملکرد ابزار به ‌ویژه در انجام برش ‌های دقیق -</p>
      </div>
      <div className="col-span-6 bg-[url('/assets/images/bk-img1.jpeg')] bg-fixed bg-contain"></div>
      </div>
      <div className="flex justify-center items-center text-center bg-grey px-24 w-full py-10">
        <img src="/assets/images/mapped.jpeg" className=""/>
      </div>
      <SectionVideo/>
      <DetailProduct/>
      <Footer/>
    </div>
  );
}
//   <div className="owl-carousel absolute bg-gray-500 w-full flex">
// <OwlCarousel ref="car" options={options} nav>
// <div className="item"><img src="/assets/images/Modeling.jpeg" width="10%" alt="The Last of us"/></div>
// <div className="item"><img src="/assets/images/Modeling.jpeg" width="10%" alt="GTA V"/></div>
// <div className="item"><img src="/assets/images/Modeling.jpeg" width="10%" alt="Mirror Edge"/></div>
// </OwlCarousel>
// </div>
