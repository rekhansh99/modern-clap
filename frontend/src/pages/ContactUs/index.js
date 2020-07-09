import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ContactUs = () => {
  return (
    <div className="dv_wrapper">
      <Header title="Contact Us" desc="Get in touch to know and grow..!" />
      <div className="dv_content">
        <div className="dv_contactus_wrapper">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <div className="dv_contact_cards">
                  <img
                    className="mb-4"
                    src="/images/svgs/mobile.svg"
                    height="50"
                    width="50"
                    alt="mobile"
                  />
                  <span>Mobile </span>
                  <ul>
                    <li>
                      <a href="#!">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 56 547 6598 </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <div className="dv_contact_cards">
                  <img
                    className="mb-4"
                    src="/images/svgs/telephone.svg"
                    height="50"
                    width="50"
                    alt="mobile"
                  />
                  <span>Telephone </span>
                  <ul>
                    <li>
                      <a href="#!">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="#!">+971 4 547 6598 </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <div className="dv_contact_cards">
                  <img
                    className="mb-4"
                    src="/images/svgs/email.svg"
                    height="50"
                    width="50"
                    alt="mobile"
                  />
                  <span>Email us </span>
                  <ul>
                    <li>
                      <a href="#!">info@modernclap.com </a>
                    </li>
                    <li>
                      <a href="#!">contact@modernclap.com </a>
                    </li>
                    <li>
                      <a href="#!">sales@modernclap.com </a>
                    </li>
                    <li>
                      <a href="#!">enquiry@modernclap.com </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dv_contact_form">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="dv_contact_form_heading">
                  Feel free to contact us{' '}
                </h4>
                <input
                  type="text"
                  className="form-control dv_careers_form_input"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="form-control dv_careers_form_input"
                  placeholder="Orgnization Name"
                />
                <input
                  type="text"
                  className="form-control dv_careers_form_input"
                  placeholder="Email ID"
                />
                <input
                  type="text"
                  className="form-control dv_careers_form_input"
                  placeholder="Contact No"
                />
                <input
                  type="text"
                  className="form-control dv_careers_form_input"
                  placeholder="Message"
                />
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
        <div className="dv_contact_map">
          <div className="container">
            <iframe
              title="location"
              className="dv_map_iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d84069.67301395387!2d55.26595669578918!3d25.21639188364983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1592722383879!5m2!1sen!2sae"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              frameBorder={0}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
