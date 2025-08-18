'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function FirstRetro() {
  const images = ['/photo/Elabram_1.jpg', '/photo/Elabram_2.jpg']

  return (
    <div className="my-2 mx-auto w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className=" flex "
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-36 w-full object-cover md:h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
