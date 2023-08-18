import React from "react";
import styled from "styled-components";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <Container>
      <h2 className="title">Our Projects</h2>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/free-icon/number_318-187603.jpg"
            alt=""
          />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga similique quibusdam pariatur? Omnis perferendis maiores
              deserunt, assumenda nemo porro ratione atque totam, libero
              possimus officiis vitae? Consequuntur dolorem veniam non minima.
              Voluptatem perspiciatis esse voluptatibus voluptas consectetur
              voluptate recusandae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png"
            alt=""
          />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga similique quibusdam pariatur? Omnis perferendis maiores
              deserunt, assumenda nemo porro ratione atque totam, libero
              possimus officiis vitae? Consequuntur dolorem veniam non minima.
              Voluptatem perspiciatis esse voluptatibus voluptas consectetur
              voluptate recusandae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Number_3_in_yellow_rounded_square.svg/1200px-Number_3_in_yellow_rounded_square.svg.png"
            alt=""
          />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga similique quibusdam pariatur? Omnis perferendis maiores
              deserunt, assumenda nemo porro ratione atque totam, libero
              possimus officiis vitae? Consequuntur dolorem veniam non minima.
              Voluptatem perspiciatis esse voluptatibus voluptas consectetur
              voluptate recusandae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://www.clker.com//cliparts/g/t/y/l/z/P/blue-rounded-square-with-number-4-hi.png"
            alt=""
          />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga similique quibusdam pariatur? Omnis perferendis maiores
              deserunt, assumenda nemo porro ratione atque totam, libero
              possimus officiis vitae? Consequuntur dolorem veniam non minima.
              Voluptatem perspiciatis esse voluptatibus voluptas consectetur
              voluptate recusandae?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  .title {
    margin-top: 3em;
    font-weight: 600;
    text-align: center;
  }
  .swiper {
    width: 100%;
    .slide {
      width: 80%;
      padding: 3em 7em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3em;
      img {
        width: 400px;
      }
    }
  }
`;

export default Projects;
