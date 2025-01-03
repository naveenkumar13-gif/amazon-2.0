import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import CarouselCategory from "../../Components/Carousel/carouselCategory";
import CarouselProduct from "../../Components/Carousel/carouselProduct";
import Homecard from "../../Components/HomeCard/Homecard";
function index() {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-pure-black text-white">
        <Carousel />
        <div className="grid grid-cols-3 gap-4  -mt-60 ">
          <Homecard
            title={"We have a surprise for you"}
            image="../images/home_grid_1.jpg"
            link={"See terms and conditions"}
          />
          <Homecard
            title={"Watch The Rings of Power"}
            image={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <Homecard
            title={"Unlimited Streaming"}
            image={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <Homecard
            title={"More titles to explore"}
            image={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <Homecard
            title={"Shop Pet Supplies"}
            image={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <Homecard
            title={"Spring Sale"}
            image={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <Homecard
            title={"Echo Buds"}
            image={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <Homecard
            title={"Family Plan: 3 months free"}
            image={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <Homecard
            title={"mobile & Tablets"}
            image={"../images/home_grid_9.jpg"}
            link={"See more"}
          />
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px] mt-4">
          <img
            src="../images/banner_image.jpg"
            alt="banner_image"
            className="h-full m-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
