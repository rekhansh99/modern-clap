import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Categories = () => {
  const categories = [
    {
      name: 'cleaners',
      img: 'cleaners.svg',
      url: 'cleaners'
    },
    {
      name: 'online fitness',
      img: 'online-fitness.svg',
      url: 'online-fitness'
    },
    {
      name: 'ladies salon',
      img: 'ladies-salon.svg',
      url: 'ladies-salon'
    },
    {
      name: 'gents salon',
      img: 'gents-salon.svg',
      url: 'gents-salon'
    },
    {
      name: 'disinfection',
      img: 'disinfection.svg',
      url: 'disinfection'
    },
    {
      name: 'deep cleaning',
      img: 'deep-cleaning.svg',
      url: 'deep-cleaning'
    },
    {
      name: 'handyman',
      img: 'handyman.svg',
      url: 'handyman'
    },
    {
      name: 'electrician',
      img: 'electrician.svg',
      url: 'electrician'
    },
    {
      name: 'painters',
      img: 'painters.svg',
      url: 'painters'
    },
    {
      name: 'packers & movers',
      img: 'packers-and-movers.svg',
      url: 'packers-and-movers'
    },
    {
      name: 'AC Technicians',
      img: 'ac-technician.svg',
      url: 'ac-technician'
    },
    {
      name: 'pest controls',
      img: 'pest-control.svg',
      url: 'pest-control'
    }
  ];

  const categoriesJSX = categories.map(category => (
    <Col md={2} sm={4} xs={4} className="dv_all_cat_2" key={category.name}>
      <Link to={'/select-services/' + category.url}>
        <img src={'/images/svgs/' + category.img} alt="" />
        {category.name}
        {/* <span class="dv_off_percentage_show">31% off </span>
         */}
      </Link>
    </Col>
  ));

  return (
    <div className="dv_all_category">
      <Container>
        <div className="dv_all_category_card">
          <Row>{categoriesJSX}</Row>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
