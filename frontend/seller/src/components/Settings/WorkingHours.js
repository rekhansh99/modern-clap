import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormControl, Card, Table } from 'react-bootstrap';

import SectionHeading from '../common/SectionHeading';

const WorkingHours = ({
  active,
  setActive,
  changed,
  setChanged,
  onSubmit,
  settings,
  setSettings
}) => {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  const setBusinessHours = (type, index, value) => {
    const businessHours = {
      ...settings.businessHours,
      [type]: { ...settings.businessHours[type] }
    };
    businessHours[type][index] = value;
    console.log(businessHours);
    setSettings({ businessHours });
  };

  const validateSettings = async () => {
    const businessHours = { open: {}, close: {} };

    days.forEach(day => {
      const key = day.slice(0, 3);
      businessHours.open[key] =
        settings.businessHours.open[key];
      businessHours.close[key] =
        settings.businessHours.close[key];
    });

    await onSubmit({ businessHours });
    setChanged(false);
  };

  return (
    <div className="dv_per_service_wrapper">
      <SectionHeading
        title="Working Hours"
        active={active}
        setActive={setActive}
        changed={changed}
        onSubmit={validateSettings}
      />
      {active && (
        <div className="dv_per_service_wrapper">
          <Row className="p-3">
            <Col md={12}>
              <Card className="p-0">
                <Card.Header>Open - Close Timings </Card.Header>
                <Card.Body className="p-0">
                  <Table>
                    <thead>
                      <tr>
                        <th>Days </th>
                        <th>Open </th>
                        <th>Close </th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day, index) => (
                        <tr key={index}>
                          <td>{day}</td>
                          <td>
                            <FormControl
                              as="select"
                              name={day}
                              className="dv_all_inputs"
                              value={
                                settings.businessHours.open[day.slice(0, 3)] ||
                                ''
                              }
                              onChange={e =>
                                setBusinessHours(
                                  'open',
                                  day.slice(0, 3),
                                  +e.target.value
                                )
                              }
                            >
                              <option value="" disabled hidden>
                                Select Time
                              </option>
                              <option value={0}>12 AM </option>
                              <option value={1}>1 AM </option>
                              <option value={2}>2 AM </option>
                              <option value={3}>3 AM </option>
                              <option value={4}>4 AM </option>
                              <option value={5}>5 AM </option>
                              <option value={6}>6 AM </option>
                              <option value={7}>7 AM </option>
                              <option value={8}>8 AM </option>
                              <option value={9}>9 AM </option>
                              <option value={10}>10 AM </option>
                              <option value={11}>11 AM </option>
                              <option value={12}>12 PM </option>
                              <option value={13}>1 PM </option>
                              <option value={14}>2 PM </option>
                              <option value={15}>3 PM </option>
                              <option value={16}>4 PM </option>
                              <option value={17}>5 PM </option>
                              <option value={18}>6 PM </option>
                              <option value={19}>7 PM </option>
                              <option value={20}>8 PM </option>
                              <option value={21}>9 PM </option>
                              <option value={22}>10 PM </option>
                              <option value={23}>11 PM </option>
                            </FormControl>
                          </td>
                          <td>
                            <FormControl
                              as="select"
                              className="dv_all_inputs"
                              value={
                                settings.businessHours.close[day.slice(0, 3)] ||
                                ''
                              }
                              onChange={e =>
                                setBusinessHours(
                                  'close',
                                  day.slice(0, 3),
                                  +e.target.value
                                )
                              }
                            >
                              <option value="" disabled hidden>
                                Select Time
                              </option>
                              <option value={0}>12 AM </option>
                              <option value={1}>1 AM </option>
                              <option value={2}>2 AM </option>
                              <option value={3}>3 AM </option>
                              <option value={4}>4 AM </option>
                              <option value={5}>5 AM </option>
                              <option value={6}>6 AM </option>
                              <option value={7}>7 AM </option>
                              <option value={8}>8 AM </option>
                              <option value={9}>9 AM </option>
                              <option value={10}>10 AM </option>
                              <option value={11}>11 AM </option>
                              <option value={12}>12 PM </option>
                              <option value={13}>1 PM </option>
                              <option value={14}>2 PM </option>
                              <option value={15}>3 PM </option>
                              <option value={16}>4 PM </option>
                              <option value={17}>5 PM </option>
                              <option value={18}>6 PM </option>
                              <option value={19}>7 PM </option>
                              <option value={20}>8 PM </option>
                              <option value={21}>9 PM </option>
                              <option value={22}>10 PM </option>
                              <option value={23}>11 PM </option>
                            </FormControl>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

WorkingHours.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  changed: PropTypes.bool.isRequired,
  setChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired
};

export default WorkingHours;
