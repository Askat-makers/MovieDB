import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { IMAGE_API } from "../helpers/const";
import { Link } from "react-router-dom";

const Recommendations = ({ movieRecommendations }) => {
  return (
    <Root>
      <Swiper
        style={{ height: 500 }}
        grabCursor={true}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        {movieRecommendations.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: 280, height: 400 }}>
            <Link to={`/movie/${movie.id}`}>
              <CustomSwiperSlide src={`${IMAGE_API}${movie.poster_path}`} />
              <Title>{movie.title}</Title>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Root>
  );
};
const Root = styled.div``;
const CustomSwiperSlide = styled.img`
  width: 280px;
  height: 400px;
  object-fit: contain;
`;
const Title = styled.h4``;

export default Recommendations;
