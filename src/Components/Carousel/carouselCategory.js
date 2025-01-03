import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function carouselCategory() {
  return (
    <div className="bg-white mt-8 p-4">
      <div className="text-2xl font-semibold p-3 text-black">
        Shop by category
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        className="h-[50h]"
      >
        <SwiperSlide>
          <img src="../images/category_0.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_1.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_2.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_3.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_4.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/category_5.jpg" alt="image1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default carouselCategory;
