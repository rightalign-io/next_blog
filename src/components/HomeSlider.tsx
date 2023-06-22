// Import Swiper Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSwiper } from 'swiper/react';

const HomeSlider = () => {
  return (
    <Swiper className='h-64 min-h-full my-auto border-t border-2-t border-gray-400 mx-10 px-12'
      spaceBetween={50} slidesPerView={1}
      onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
      <SwiperSlide data-swiper-slide-index="2" role="group" aria-label="3/4" className='w-11/12 swiper-slide swiper-slide-prev mb-3 bg-center' style={{backgroundImage: "url('./9V1A1437.jpg')"}}>
        <a href="#" className="img-bg d-flex align-items-end">
        <div className="img-bg-inner">
            <h2>1 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
        </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className='w-11/12 swiper-slide swiper-slide-prev mb-3 bg-center' style={{backgroundImage: "url('./9V1A1437.jpg')"}}>
        <a href="#" className="img-bg" style={{backgroundImage: "url('assets/img/post-slide-3.jpg');"}}>
            <div className="img-bg-inner text-center">
                <h2>2 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
            </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className='w-11/12 swiper-slide swiper-slide-prev mb-3 bg-center' style={{backgroundImage: "url('./9V1A1437.jpg')"}}>
        <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('assets/img/post-slide-3.jpg');"}}>
            <div className="img-bg-inner">
                <h2>3 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
            </div>
        </a>
      </SwiperSlide>
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