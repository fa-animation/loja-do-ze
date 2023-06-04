import { A11y, Autoplay, Navigation, SwiperOptions } from "swiper";

export const sliderSettings: SwiperOptions = {
  modules: [Navigation, A11y, Autoplay],
  spaceBetween: 10,
  slidesPerView: 'auto',
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};