
"use client";

import { Carousel } from "flowbite-react";

const CarouselNews = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-3 p-3">
    <Carousel>
      <img src="/ciberseguranca.webp" alt="Imagem sobre cibersegurança" className="w-full h-full object-cover" />
      <img src="/IA_webinar.webp" alt="Imagem sobre IA webinar" className="w-full h-full object-cover" />
      <img src="/neuralink.jpg" alt="Imagem sobre Neuralink" className="w-full h-full object-cover" />
    </Carousel>
  </div>
  );
}

export default CarouselNews;
