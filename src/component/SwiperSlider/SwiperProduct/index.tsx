import type { NextPage } from 'next';
import { CSSProperties } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderSettings } from '../config';
import { ProductCard } from './ProductCard';
import { SwiperNavButtons } from '../SwiperNavButtons';
// import 'swiper/css';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
};

export const ProductSwiper: NextPage<any> = ({ data }) => {
  const slides = Array.from({ length: 20 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <Box w="100%" h="100%">
      <Heading size="md" my="1.5rem">
       Produtos Exemplos
      </Heading>
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        <SwiperNavButtons />
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} style={slideStyles}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}