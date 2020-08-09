import React from 'react';

// import Container from 'react-bootstrap/Container';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FullSlider from '../components/Landing/FullSlider';
import RepeatSlider from '../components/common/RepeatSlider';
import NewSlider from '../components/Landing/NewSlider';
// import FullBanner from '../components/Landing/FullBanner';
// import TwoBanner from '../components/Landing/TwoBanner';
// import ImageText from '../components/Landing/ImageText';
import CategoryBox from '../components/Landing/CategoryBox';

import { ReactComponent as Secure } from '../svgs/secure.svg';

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

  const whyModernclapItems = [
    {
      title: 'Secure & Confidential',
      svg: Secure,
      desc: 'Your data is always secure with us'
    },
    {
      title: 'Secure & Confidential',
      svg: Secure,
      desc: 'Your data is always secure with us'
    },
    {
      title: 'Secure & Confidential',
      svg: Secure,
      desc: 'Your data is always secure with us'
    },
    {
      title: 'Secure & Confidential',
      svg: Secure,
      desc: 'Your data is always secure with us'
    }
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
        {/* <FullBanner /> */}
        {/* <TwoBanner /> */}
        <RepeatSlider heading="Cleaning" desc="professional staff" />
        <RepeatSlider heading="AC Technicians" desc="safety first" />
        <NewSlider heading="Why Modernclap?" items={whyModernclapItems} />
        {/* <FullBanner /> */}
        {/* <TwoBanner /> */}
        <RepeatSlider heading="Deep Cleaning" desc="safety first" />
        <RepeatSlider heading="Disinfection" desc="safety first" />
        <RepeatSlider heading="Handymen" desc="safety first" />
        <RepeatSlider heading="Ladies Salon" desc="safety first" />
        <RepeatSlider heading="Men's Salon" desc="safety first" />
        <RepeatSlider heading="Painters" desc="safety first" />
        <RepeatSlider heading="Pest Control" desc="safety first" />
        {/* <ImageText /> */}
        {/* <div className="dv_download_app">
          <Container>
            <img
              src="./images/download-app.jpg"
              alt=""
              style={{ width: '100%', borderRadius: '5px' }}
            />
          </Container>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
