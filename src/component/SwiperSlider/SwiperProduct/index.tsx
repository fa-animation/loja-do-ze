import type { NextPage } from 'next';
import { CSSProperties } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderSettings } from '../config';
import { ProductCard } from './ProductCard';
import { SwiperNavButtons } from '../SwiperNavButtons';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
  display: 'flex'
};


type ProdcutProps = {
  id: number;
  title: string;
  description: string;
  price: number
  photo: string;
  // category: string;
  // rating: number;
}

type ICard = {
  data: ProdcutProps[]
  message: string;
}

export const ProductSwiper: NextPage<ICard> = ({ data, message }) => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx="auto" p="2rem">
      <Box w="100%" h="100%">
        <Heading size="md" my="1.5rem">
          {message}
        </Heading>
        <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
          <SwiperNavButtons />
          {data.map((item) => (
            <SwiperSlide key={item.id} style={slideStyles}>
              <ProductCard {...item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}