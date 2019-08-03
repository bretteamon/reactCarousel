import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [tags, setTags] = useState([
    {
      name: "Javascript",
      url: "#",
      imgSrc: "https://via.placeholder.com/150?text=Javascript"
    },
    {
      name: "HTML",
      url: "#",
      imgSrc: "https://via.placeholder.com/150?text=HTML"
    },
    {
      name: "CSS",
      url: "#",
      imgSrc: "https://via.placeholder.com/150?text=CSS"
    },
    {
      name: "React",
      url: "#",
      imgSrc: "https://via.placeholder.com/150?text=React"
    },
    {
      name: "Python",
      url: "#",
      imgSrc: "https://via.placeholder.com/150?text=Python"
    }
  ]);

  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    const resetTags = slide === 0;

    const index = resetTags ? tags.length - 1 : slide - 1;

    setSlide(index);
  };

  const nextSlide = () => {
    const resetIndex = slide === tags.length - 1;

    const index = resetIndex ? 0 : slide + 1;

    setSlide(index);
  };

  const currentSlides = tags.slice(slide, slide + 5);

  const toDisplay =
    currentSlides.length < 5
      ? [...currentSlides, ...tags.slice(0, 5 - currentSlides.length)]
      : currentSlides;

  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      <section>
        {toDisplay.map((image, index) => {
          <CarouselItem
            {...tags}
            key={index}
            imgSrc={image.imgSrc}
            url={image.url}
            name={image.name}
          />;
        })}
        {/* <img key={index} src={image.imgSrc} alt="" />; })} */}
      </section>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
