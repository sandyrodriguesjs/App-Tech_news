
"use client";

import { Carousel } from "flowbite-react";

const CarouselNews = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-3 p-3">
      <Carousel>
        <img src="/ciberseguranca.webp" alt="..." />
        <img src="/IA_webinar.webp" alt="..." />
        <img src="/neuralink.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselNews;
