import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss"
import "./../styles/components/_slider.scss"
import imageSlide from './../assets/image-slide.svg';
import SlideContent from './SlideContent';

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <Swiper
            spaceBetween={48}
            slidesPerView={3}
            navigation={true}
            freeMode={true}
            slidesPerView={'auto'}
        >
            <SwiperSlide>
                <SlideContent 
                    slideImg={imageSlide}
                    slideImgAlt="Alt text"
                    slideLink="/"
                    slideTitle="Lorem ipsum"
                    slideDate="17 Nov 2020"
                    slideText="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent 
                    slideImg={imageSlide}
                    slideImgAlt="Alt text"
                    slideLink="/"
                    slideTitle="Lorem ipsum"
                    slideDate="17 Nov 2020"
                    slideText="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent 
                    slideImg={imageSlide}
                    slideImgAlt="Alt text"
                    slideLink="/"
                    slideTitle="Lorem ipsum"
                    slideDate="17 Nov 2020"
                    slideText="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent 
                    slideImg={imageSlide}
                    slideImgAlt="Alt text"
                    slideLink="/"
                    slideTitle="Lorem ipsum"
                    slideDate="17 Nov 2020"
                    slideText="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent 
                    slideImg={imageSlide}
                    slideImgAlt="Alt text"
                    slideLink="/"
                    slideTitle="Lorem ipsum"
                    slideDate="17 Nov 2020"
                    slideText="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum."
                />
            </SwiperSlide>
            
        </Swiper>
    );
}

export default Slider
