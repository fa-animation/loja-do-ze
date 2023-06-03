import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, SwiperOptions } from 'swiper'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { feedbackData } from '@/utils/feedback';
import { FeedbackSlide } from './Feedback';
import { SwiperNavButtons } from './SwiperNavButtons';
import { Box, Heading } from '@chakra-ui/react';

export const Slide = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <Box>
      <Heading textAlign={"center"} mb={1}>Opiniões dos nossos clientes</Heading>
      <Swiper {...sliderSettings}>
        <SwiperNavButtons />
        {feedbackData.map((item, el) => {
          return (
            <SwiperSlide key={el}>
              <FeedbackSlide {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper >
    </Box>
  )
}