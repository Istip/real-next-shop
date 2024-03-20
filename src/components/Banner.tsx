"use client";

import Image from "next/image";
import Slider from "react-slick";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  banners: any;
}

const Banner = ({ banners }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {banners?.map((banner: any) => (
          <Image
            key={banner._id}
            src={urlForImage(banner.image)}
            alt={banner.title}
            className="relative w-full max-h-[650px] object-cover"
            width={1920}
            height={1920}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
