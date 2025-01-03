import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function carouselProduct() {
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
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={`../images/product_${i}_small.jpg`} alt="product_image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default carouselProduct;
