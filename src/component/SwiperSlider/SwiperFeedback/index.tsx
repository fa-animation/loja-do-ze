import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading } from '@chakra-ui/react';

import { feedbackData } from '@/utils/feedback';
import { FeedbackCard } from './FeedbackCard';
import { SwiperNavButtons } from '../SwiperNavButtons';
import { sliderSettings } from '../config';
import 'swiper/css';

export const FeedbackSwiper = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mb={1}>Opiniões dos nossos clientes</Heading>
      <Swiper {...sliderSettings}>
        <SwiperNavButtons />
        {feedbackData.map((item, el) => {
          return (
            <SwiperSlide key={el}>
              <FeedbackCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper >
    </Box>
  )
}