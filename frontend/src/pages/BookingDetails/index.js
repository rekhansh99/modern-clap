import React from 'react';
import RepeatSlider from '../../components/RepeatSlider';

const BookingDetails = () => {
  const sliders = [
    {
      heading: 'cleaners',
      desc: 'professional staff',
      items: [
        {
          title: 'kitchen cleaning',
          src: '/images/slider/1.jpg',
          link: '#'
        },
        {
          title: 'kitchen cleaning',
          src: '/images/slider/1.jpg',
          link: '#'
        },
        {
          title: 'kitchen cleaning',
          src: '/images/slider/1.jpg',
          link: '#'
        },
        {
          title: 'kitchen cleaning',
          src: '/images/slider/1.jpg',
          link: '#'
        },
        {
          title: 'kitchen cleaning',
          src: '/images/slider/1.jpg',
          link: '#'
        }
      ]
    }
  ];
  return <RepeatSlider {...sliders[0]} />;
};

export default BookingDetails;
