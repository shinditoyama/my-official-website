"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { HighlightCard } from "./HighlightCard";

interface Props {
  projects: IProjectAttributes[];
}

export function HighlightList({ projects }: Props) {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="h-[450px] text-center"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.slug}>
          <HighlightCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
