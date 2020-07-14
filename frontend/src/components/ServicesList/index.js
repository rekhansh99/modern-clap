import React from 'react';

import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Plus, Minus } from 'react-feather';

const ServicesList = () => {
  return (
    <Col lg={6} sm={12} className="dv_select_service_3 p-0">
      <h3>services </h3>
      <ul className="dv_select_service_ul dv_last_service_border">
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service 1</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <span className="dv_add_overlay">add </span>
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
            <div className="dv_service_points">
              <ul>
                <li>OPI products </li>
                <li>Disposable products used </li>
                <li>safety is priority </li>
                <li>
                  <Link to={'/service/medicure'}>read more </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
        <li>
          <div className="dv_service_prices_add_minus_btn_wrapper">
            <div className="dv_service_prices_wrapper">
              <span className="dv_service_name">African braids service</span>
            </div>
            <div className="dv_plus_minus_wrapper">
              <ul className="dv_prices_cut_main">
                <li>AED 120</li> <li>AED 90</li>
              </ul>
              <ButtonGroup size="lg">
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Minus size={24} />
                </Button>
                <FormControl
                  type="text"
                  className="dv_input_qty"
                  defaultValue={2}
                />
                <Button type="button" className="btn-default dv_plus_minusbtn">
                  <Plus size={24} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </li>
      </ul>
    </Col>
  );
};

export default ServicesList;
