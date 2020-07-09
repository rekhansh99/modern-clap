import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Categories = () => {
  const categories = [
    {
      name: 'cleaners',
      img: 'cleaners.svg'
    },
    {
      name: 'online fitness',
      img: 'online-fitness.svg'
    },
    {
      name: 'ladies salon',
      img: 'ladies-salon.svg'
    },
    {
      name: 'gents salon',
      img: 'gents-salon.svg'
    },
    {
      name: 'disinfection',
      img: 'disinfection.svg'
    },
    {
      name: 'deep cleaning',
      img: 'deep-cleaning.svg'
    },
    {
      name: 'handyman',
      img: 'handyman.svg'
    },
    {
      name: 'electrician',
      img: 'electrician.svg'
    },
    {
      name: 'painters',
      img: 'painters.svg'
    },
    {
      name: 'packers & movers',
      img: 'packers-and-movers.svg'
    },
    {
      name: 'AC Technicians',
      img: 'ac-technician.svg'
    },
    {
      name: 'pest controls',
      img: 'pest-control.svg'
    }
  ];

  const categoriesJSX = categories.map(category => (
    <Col md={2} sm={4} xs={4} className="dv_all_cat_2" key={category.name}>
      <a href="select-services.html">
        <img src={'/images/svgs/' + category.img} alt="" />
        {category.name}
        {/* <span class="dv_off_percentage_show">31% off </span>
         */}
      </a>
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
