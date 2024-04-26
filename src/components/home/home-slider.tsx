"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DummyData from "@/dummy/DummyData";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "./HomeSlider.scss"
import {Swiper as swiper} from "swiper";
import axios from "axios";
import { Button } from "@/components/ui/button";
// import AxleButton from "@/components/global/AxleButton";
// import GlobalLoading from "@/components/global/GlobalLoading";
// import swiper from "swiper";

export default function HomePageSlider() {
  const swiperRef: any = useRef(null);
  const paginationRef:any = useRef(null);
  const [slideData, setSlideData]:any = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kind-pear-puffer-tie.cyclic.cloud/api/slide/getall');
        setSlideData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const [swiperIns,setSwiperIns] = useState<swiper | null >();
  const paginationStyle:any = {
    '--swiper-pagination-color': 'red',
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  useEffect(()=>{
    console.log(swiperRef)
    // swiperRef.pagination.update()
  },[swiperRef])

  if (loading) {
    // return <GlobalLoading/>
    return <p>Loading...</p>
  }


  return (
    <div className="relative w-full ">  
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={async (swiper) => {
          setSwiperIns(swiper);
          swiperRef.current = swiper
          // if (swiper){
          //   // swiper.navigation.update()
          //   swiper.pagination.init()
          // swiper.pagination.update()}
          
        }}
        className="home-slider-main"
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        
      >
{slideData &&
          slideData.slides.map((slideSet:any, setIndex:any) =>
            slideSet.slides.map((slide:any, index:any) => (
              <SwiperSlide className="home-slider" key={slide._id}>
                <div className="home-slide-text bg-secondary/50 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold">{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="absolute bottom-5">
                    {/* <AxleButton title="PLAY NOW"/> */}
                  </div>
                </div>
                <img src={slide.media.type.url} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))
          )}
      </Swiper>
      <div className="home-slider-pagination">
      <div className="bg-white/25 backdrop-blur-sm flex gap-2 items-center p-1 rounded-full">
        <div onClick={handlePrev} className="bg-primary/40 rounded-full p-1 hover:bg-primary cursor-pointer duration-100">
          <ChevronLeft />
        </div>

        <div ref={paginationRef} style={paginationStyle} className=" flex gap-1" />

        <div onClick={handleNext} className="bg-primary/40 rounded-full p-1 hover:bg-primary cursor-pointer duration-100">
          <ChevronRight />
        </div>
      </div>
      </div>
      
    </div>
  );
}