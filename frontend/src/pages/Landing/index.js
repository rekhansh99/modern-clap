import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullSlider from '../../components/FullSlider';
import RepeatSlider from '../../components/RepeatSlider';
import FullBanner from '../../components/FullBanner';
import TwoBanner from '../../components/TwoBanner';
import ImageText from '../../components/ImageText';
import Categories from '../../components/Categories';

const Landing = () => {
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
        <FullSlider />
        <Categories />
        <FullBanner />
        <TwoBanner />
        <RepeatSlider
          heading="cleaners"
          desc="professional staff"
          items={[
            {
              link: '#',
              src: 'images/slider/1.jpg',
              title: 'deep cleaning'
            },
            {
              link: '#',
              src: 'images/slider/2.jpg',
              title: 'soft cleaning'
            },
            {
              link: '#',
              src: 'images/slider/3.jpg',
              title: 'kitchen cleaning'
            },
            {
              link: '#',
              src: 'images/slider/4.jpg',
              title: 'bathroom cleaning'
            }
          ]}
        />
        <RepeatSlider
          heading="outfeet fitness"
          desc="safety first"
          items={[
            {
              link: '#',
              src: 'images/slider/1.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/2.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/3.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/4.jpg',
              title: 'service title'
            }
          ]}
        />
        <FullBanner />
        <TwoBanner />
        <RepeatSlider
          heading="bathroom cleaning"
          desc="used hand gloves"
          items={[
            {
              link: '#',
              src: 'images/slider/1.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/2.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/3.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/4.jpg',
              title: 'service title'
            }
          ]}
        />
        <RepeatSlider
          heading="repairs"
          desc="30 days service guarantee"
          items={[
            {
              link: '#',
              src: 'images/slider/1.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/2.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/3.jpg',
              title: 'service title'
            },
            {
              link: '#',
              src: 'images/slider/4.jpg',
              title: 'service title'
            }
          ]}
        />
        <ImageText />
        <div className="dv_download_app">
          <Container>
            <img
              src="images/download-app.jpg"
              alt=""
              title
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
