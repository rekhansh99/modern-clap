import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Careers = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="Careers"
        desc="We’re looking for creative, collaborative individuals to join our team!"
      />
      <div className="dv_content">
        <div className="dv_career_form_wrapper">
          <div className="container">
            <div className="dv_career_container">
              <label className="dv_career_section">Personal Details </label>
              <select className="form-control dv_careers_form_input">
                <option value>Job title</option>
                <option value="Fresher">Fresher</option>
                <option value="Jr. Asp.net Developer">
                  {' '}
                  Jr. Asp.net Developer (0.6 to 3 year)
                </option>
                <option value="Sr. Asp.net Developer">
                  {' '}
                  Sr. Asp.net Developer (above 3 year)
                </option>
                <option value="Jr. SQL Database Developer">
                  {' '}
                  Jr. SQL Database Developer
                </option>
                <option value="Sr. SQL Database Developer">
                  {' '}
                  Sr. SQL Database Developer{' '}
                </option>
                <option value="Jr. Graphic Designer">
                  {' '}
                  Jr. Graphic Designer (1 to 3 year)
                </option>
                <option value="Sr. Graphic Designer">
                  {' '}
                  Sr. Graphic Designer (above 3 year)
                </option>
                <option value="Jr. Web Designer">
                  {' '}
                  Jr. Web Designer (1 to 3 year)
                </option>
                <option value="Sr. Web Designer">
                  {' '}
                  Sr. Web Designer (above 3 year)
                </option>
                <option value="Jr. SEO / SMO executive">
                  {' '}
                  Jr. SEO / SMO executive
                </option>
                <option value="Sr. SEO / SMO executive">
                  {' '}
                  Sr. SEO / SMO executive{' '}
                </option>
                {/* <option value="Business Development Executive"> Business Development Executive</option> */}
                <option value="Business Development Manager">
                  {' '}
                  Business Development Manager
                </option>
                <option value="Tele Sales Executive">
                  {' '}
                  Tele Sales Executive
                </option>
                <option value="Data Entry Operator">
                  {' '}
                  Data Entry Operator
                </option>
                <option value="Other"> Other</option>
              </select>
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Mobile"
              />
              <input
                type="date"
                className="form-control dv_careers_form_input"
                placeholder="DOB"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Email ID"
              />
              <div className="dv_male_female">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="customRadio"
                    name="example"
                    defaultValue="customEx"
                  />
                  <label className="custom-control-label" htmlFor="customRadio">
                    Male{' '}
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="customRadio2"
                    name="example"
                    defaultValue="customEx"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    Female{' '}
                  </label>
                </div>
              </div>
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Address"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="City"
              />
              <select className="form-control dv_careers_form_input">
                <option value>Martial Status </option>
                <option>Married </option>
                <option>unmarried </option>
                <option>Divorced </option>
              </select>
              <label className="dv_career_section">Academic Details </label>
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Highest Qualification"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Year of Passing"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Percentange"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Collage"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="University"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Skills"
              />
              <input
                type="text"
                className="form-control dv_careers_form_input"
                placeholder="Other Details"
              />
              <label className="dv_career_section">Experience Details </label>
              <select className="form-control dv_careers_form_input">
                <option value selected>
                  Total Experice
                </option>
                <option value="Fresher">Fresher</option>
                <option value="Less than 11 Month">Less than 11 Month</option>
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10+ year">10 year</option>
              </select>
              <select className="form-control dv_careers_form_input">
                <option value>Notice Period </option>
                <option value="Immediate">Immediate</option>
                <option value="1 week">1 week</option>
                <option value="1 months">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="5 months">5 months</option>
                <option value="6 months">6 months</option>
              </select>
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="form-control dv_careers_form_input custom-file-input"
                  name="filename"
                />
                <label
                  className="dv_attach_resume custom-file-label"
                  htmlFor="customFile"
                >
                  Attach Resume{' '}
                </label>
              </div>
              <button
                type="button"
                className="btn btn-default dv_submit_Career"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
