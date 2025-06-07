'use client';

import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './carousel.module.scss';
import cx from 'clsx';
import { CarouselItem } from '../types/carousel';

interface Props {
  items: CarouselItem[];
  classname?: string;
}

const Carousel: FC<Props> = ({ items, classname }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    dotsClass: 'customDot',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className={cx(styles.container, classname)}>
      {items.map((item, index) => (
        <a
          key={item.id || index}
          className={styles.wrapper}
          href={item.href}
          target={item.isExternal ? '_blank' : '_self'}
        >
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </Slider>
  );
};

export default Carousel;
