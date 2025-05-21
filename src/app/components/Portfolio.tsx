'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Add 'link' property to each item
const portfolioItems = [
  { image: '/project1.png', alt: 'Project 1', link: 'https://nextdiapers.com/' },
  { image: '/project2.png', alt: 'Project 2', link: 'https://bugstrix.org/' },
  { image: '/project3.png', alt: 'Project 3', link: 'https://theshoesxpress.com/' },
  { image: '/project4.png', alt: 'Project 4', link: 'https://virauxdigital.com/' },
  { image: '/project1.png', alt: 'Project 1', link: 'https://nextdiapers.com/' },
  { image: '/project2.png', alt: 'Project 2', link: 'https://bugstrix.org/' },
  { image: '/project3.png', alt: 'Project 3', link: 'https://theshoesxpress.com/' },
  { image: '/project4.png', alt: 'Project 4', link: 'https://virauxdigital.com/' },
];

const PortfolioSlider = () => {
  return (
    <section
      id="portfolio"
      className="max-w-[1300px] mx-auto mt-10 mb-6 md:mb-30 text-white text-center"
    >
      <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
        <span className="text-[#800080]">PORTFOLIO</span>
      </h4>
      <h2 className="text-[34px] md:text-5xl font-bold mb-18 text-[#c4cfde]">
        <span className="text-[#c4cfde]">Recent Work</span>
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-slider"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div className="relative rounded-xl overflow-hidden">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={350}
                  height={400}
                  layout="intrinsic"
                  className="w-full h-auto border-4 border-[#c4cfde] rounded-[10px] cursor-pointer"
                  objectFit="cover"
                  priority={true}
                />
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PortfolioSlider;
