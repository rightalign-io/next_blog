// Import Swiper Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSwiper } from 'swiper/react';

const HomeSlider = () => {
  const swipperItems = [
    {title: 'Article 1 Swiper', bg: './art1.jpg', thumbNail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, offic'},
    {title: 'Article 2 Swiper', bg: '/art2.jpg', thumbNail:'iis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque'},
    {title: 'Article 3 Swiper', bg: '/art3.jpg', thumbNail:'um tempora aliquid illo. Modi ipsum quas blanditiis dignissimos consequuntur a. Accusamus, saepe! Accusantium fugiat vel in cum sunt?'}
  ];

  return (
    <Swiper className='h-64 min-h-full my-auto mx-10 px-12'
      spaceBetween={50} slidesPerView={1}
      onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
        { swipperItems.map((item, index) => {
          return <SwiperSlide data-swiper-slide-index="2" role="group" aria-label="3/4" className='w-11/12 swiper-slide swiper-slide-prev mb-3 bg-center' style={{backgroundImage: `url(${item.bg})`, backgroundRepeat: 'no-repeat'}}>
            <a href="#" className="img-bg d-flex align-items-end">
              {/* <h2 className='text-2xl ml-32 text-white mt-24' >{item.title}</h2> */}
            <div className="img-bg-inner">
                <h2>{item.title}</h2>
                <p>{item.thumbNail}</p>
            </div>
            </a>
          </SwiperSlide>
        }) }
    </Swiper>
  );
};

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}

export default HomeSlider;