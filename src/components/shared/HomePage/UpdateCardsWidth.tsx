import React from 'react'

type Props = {
	cards: NodeListOf<HTMLLIElement>;
	carousel: React.RefObject<HTMLUListElement>
}

function UpdateCardsWidth({cards, carousel}: Props) {
  const mediaQueryGg = window.matchMedia("(max-width: 1739px)");
  const mediaQueryXl = window.matchMedia("(max-width: 1279px)");
  const mediaQueryLg = window.matchMedia("(max-width: 1023px)");
  const mediaQueryMd = window.matchMedia("(max-width: 767px)");
  const mediaQueryXs = window.matchMedia("(max-width: 479px)");
  const carouselViewWidth = carousel.current!.offsetWidth;
  if (mediaQueryXs.matches) {
    const cardWidth = carouselViewWidth + "px";
    cards.forEach((card) => {
      card.style.width = cardWidth;
    });
  } else if (mediaQueryMd.matches) {
    const cardWidth = carouselViewWidth / 2 + "px";
    cards.forEach((card) => {
      card.style.width = cardWidth;
    });
  } else if (mediaQueryLg.matches) {
    const cardWidth = carouselViewWidth / 3 + "px";
    cards.forEach((card) => {
      card.style.width = cardWidth;
    });
  } else if (mediaQueryXl.matches) {
    const cardWidth = carouselViewWidth / 4 + "px";
    cards.forEach((card) => {
      card.style.width = cardWidth;
    });
  } else if (mediaQueryGg.matches) {
    const cardWidth = carouselViewWidth / 5 + "px";
    cards.forEach((card) => {
      card.style.width = cardWidth;
    });
  } else {
    // Set the default card width for other conditions
    cards.forEach((card) => {
      const cardWidth = carouselViewWidth / 6 + "px";
      card.style.width = cardWidth;
    });
  }
};

export default UpdateCardsWidth