import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Carousel() {
  return (
    <div className="h-[600px] bg-white z-30 mt-3">
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="h-[50h]"
      >
        <SwiperSlide>
          <img src="../images/carousel_1.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_2.jpg" alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_3.jpg" alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_4.jpg" alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_5.jpg" alt="image4" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="h-[80vh] bg-gradient-to-b  from-stone-900" /> */}
    </div>
  );
}

export default Carousel;
