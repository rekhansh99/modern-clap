import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullSlider from '../../components/FullSlider';
import RepeatSlider from '../../components/RepeatSlider';
import FullBanner from '../../components/FullBanner';
import TwoBanner from '../../components/TwoBanner';
import ImageText from '../../components/ImageText';
import CategoryBox from '../../components/CategoryBox';

const Landing = () => {
  document.title = 'Modern clap';

  const fullSliderImages = [
    './images/sliders/HOME_PAGE_MAIN_SLIDER_1.jpg',
    './images/sliders/HOME_PAGE_MAIN_SLIDER_2.jpg',
    './images/sliders/HOME_PAGE_MAIN_SLIDER_3.jpg'
  ];

  const fullSliderMobileImages = [
    './images/sliders/HOME_PAGE_MAIN_SLIDER_MOBILE_1.jpg',
    './images/sliders/HOME_PAGE_MAIN_SLIDER_MOBILE_2.jpg',
    './images/sliders/HOME_PAGE_MAIN_SLIDER_MOBILE_3.jpg'
  ];

  return (
    <div className="dv_wrapper">
      <Header
        headerClassName="dv_header"
        title="hire #1 staff for home services "
        desc={
          <>
            Get upto <strong>70% OFF</strong> on your first order.
          </>
        }
        search={true}
      />
      <div className="dv_content">
        <FullSlider
          images={
            window.innerWidth > 991 ? fullSliderImages : fullSliderMobileImages
          }
        />
        <CategoryBox />
        <FullBanner />
        <TwoBanner />
        <RepeatSlider heading="Cleaning" desc="professional staff" />
        <RepeatSlider heading="AC Technicians" desc="safety first" />
        <FullBanner />
        <TwoBanner />
        <RepeatSlider heading="Deep Cleaning" desc="safety first" />
        <RepeatSlider heading="Disinfection" desc="safety first" />
        <RepeatSlider heading="Handymen" desc="safety first" />
        <RepeatSlider heading="Ladies Salon" desc="safety first" />
        <RepeatSlider heading="Men's Salon" desc="safety first" />
        <RepeatSlider heading="Painters" desc="safety first" />
        <RepeatSlider heading="Pest Control" desc="safety first" />
        <ImageText />
        <div className="dv_download_app">
          <Container>
            <img
              src="./images/download-app.jpg"
              alt=""
              style={{ width: '100%', borderRadius: '5px' }}
            />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
