import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderSettings } from '../config';
import { ProductCard } from './ProductCard';
import { SwiperNavButtons } from '../SwiperNavButtons';
import 'swiper/css';

export const ProductSwiper: NextPage<any> = ({ data }) => {
  const slides = Array.from({ length: 20 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <Box>
      <Swiper {...sliderSettings}>
        <SwiperNavButtons />
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}