import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import { ChevronRight } from 'react-feather';

import { ReactComponent as Cleaners } from '../../../svgs/cleaners.svg';
import { ReactComponent as OnlineFitness } from '../../../svgs/online-fitness.svg';
import { ReactComponent as LadiesSalon } from '../../../svgs/ladies-salon.svg';
import { ReactComponent as GentsSalon } from '../../../svgs/gents-salon.svg';
import { ReactComponent as Disinfection } from '../../../svgs/disinfection.svg';
import { ReactComponent as DeepCleaning } from '../../../svgs/deep-cleaning.svg';
import { ReactComponent as Handyman } from '../../../svgs/handyman.svg';
import { ReactComponent as Electrician } from '../../../svgs/electrician.svg';
import { ReactComponent as Painters } from '../../../svgs/painters.svg';
import { ReactComponent as PackersAndMovers } from '../../../svgs/packers-and-movers.svg';
import { ReactComponent as ACTechnician } from '../../../svgs/ac-technician.svg';
import { ReactComponent as PestControl } from '../../../svgs/pest-control.svg';

const CategoryList = ({ title }) => {
  const categories = [
    {
      name: 'cleaners',
      icon: <Cleaners />,
      url: 'cleaners'
    },
    {
      name: 'online fitness',
      icon: <OnlineFitness />,
      url: 'online-fitness'
    },
    {
      name: 'ladies salon',
      icon: <LadiesSalon />,
      url: 'ladies-salon',
      selected: true
    },
    {
      name: 'gents salon',
      icon: <GentsSalon />,
      url: 'gents-salon'
    },
    {
      name: 'disinfection',
      icon: <Disinfection />,
      url: 'disinfection'
    },
    {
      name: 'deep cleaning',
      icon: <DeepCleaning />,
      url: 'deep-cleaning'
    },
    {
      name: 'handyman',
      icon: <Handyman />,
      url: 'handyman'
    },
    {
      name: 'electrician',
      icon: <Electrician />,
      url: 'electrician'
    },
    {
      name: 'painters',
      icon: <Painters />,
      url: 'painters'
    },
    {
      name: 'packers & movers',
      icon: <PackersAndMovers />,
      url: 'packers-and-movers'
    },
    {
      name: 'AC Technicians',
      icon: <ACTechnician />,
      url: 'ac-technician'
    },
    {
      name: 'pest controls',
      icon: <PestControl />,
      url: 'pest-control'
    }
  ];

  const categoriesJSX = categories.map((category, index) => (
    <li key={index} className={classnames({ selected: category.selected })}>
      {category.icon}
      {category.name}
      {category.selected ? <ChevronRight /> : ' '}
    </li>
  ));

  return (
    <Col lg={3} sm={12} className="dv_select_service_3 dv_padding_left_0">
      <h3>{title}</h3>
      <ul className="dv_services_ul_height">{categoriesJSX}</ul>
    </Col>
  );
};

CategoryList.propTypes = {
  title: PropTypes.string.isRequired
};

export default CategoryList;
