import React, { useState } from "react";

const CarouselItem = state => {
  return (
    <div>
      <a href={state.url}>
        <img src={state.imgSrc}></img>
        <p>{state.name}</p>
      </a>
    </div>
  );
};

export default CarouselItem;
