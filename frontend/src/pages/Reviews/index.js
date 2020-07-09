import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Reviews = () => {
  return (
    <div className="dv_wrapper">
      <Header
        title="Reviews"
        desc="Total 1,241review by 245 customers with average rating is 4.5"
      />
      <div className="dv_content">
        <div className="dv_review_counting_wrapper">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
              <div className="dv_review_cards">
                <img src="data:image/jpeg;base64,UklGRkYDAABXRUJQVlA4IDoDAADwEQCdASpQAFAAPt1Wp0yopCOiMLTsqRAbiWMAyeWT3JI9GKvzTSr3TejDsMYKK19euSJoso2vsFCUN9+yy4EGOUzPpOWucU5F9wqR0oovb+0YH5xUsInOEuQtoWeVemxA+Kj1RihXELwid5iZmeHB9DIQGx4oiYl9UOTWJmBB/Z5eeehjKgNFkSrX9LkcHFxf9arJRVzSaAD++fDgoseDsVbxb76aYIFjoKqb3i5PELqn7uOfM/puC4zeKMc5gKO/gbmti8GQ2oItHhw0FWXSueiKsw5crEyfJ/xIrzD2ZYICiNtYMnCgn3WOAvz/wPLyttn1P2KDnL/ENTPhxSq8aob8wiWvBjLUc4irGhwrBGLxWi+KjZBn9KYUHwOFduFyWDdmPRxlqh1d5N+lcGxqL07troelvZ78Tp1lZzJXgp1U1DoUdiLmCfme5JWHJdfJZpfFZyX40noWzSIhCDQBnyOBm6IJIArR77ckdMH9l2283jqhI21cPOzwnwirZOBsPfFJUNvczQI/WBNRay0aBSMkMACDmRLwF9K487kouE/t28kaCLwGJOtDS7tTANSr5r4lV9l9dssjHrKRZV/DYlk9LVZLKG17W4ow019NJx+SzTVacU/o/WfflFMFRBzKB23Q7Ici6eeOf4pK2HybcPcNMSifUOp8qbR+fIwhxmMWrF5AsvEtWXfrsPvPeFQu4pGpSQUKgH9yCgbtIgN+GrCPMCxIyD2psVReB9Gsb8OAMUprtWnmSC1HW0icBfc/Ry/HkEPWW2rNHuaa7LJ1yAJJJ5iu+ejjXC5OSXq1Ctts222yow0zfOIzduHDWsuDHlPXAZDzDjL48PExYL3XztD06J4xtCciCadvE97xW8/4GeNwTT1s81KaMqB1HgvMbgItlsWL1J+5KVtC3csM5iZLsowdC88H9vAMWjlSRjk+eZSWrju6M2HwEL6Ii1dtxfE0VLdrcWM5OHP4Cxb+jzkcZLbJ4a7cyJToJDjALL5wqgXrifeY8TQfNCcUHbAxIZJj1/U2tsjyLDzFywQpmvyrfG4vPM/y2xoz5VmIhSCZ67gW+3kqNkej2PUKlm1GUJHZVGHr3QAA" />
                <div className="dv_review_holder_name_review">
                  <span className="dv_name_holder">
                    <img
                      className="mr-2"
                      src="/images/svgs/tick.svg"
                      height="20"
                      width="20"
                    />
                    suresh varma{' '}
                    <img
                      src="/images/svgs/star.svg"
                      width="15"
                      height="15"
                      style={{
                        fill: '#0eca0e',
                        color: '#0eca0e',
                        height: '15px',
                        width: '15px',
                        margin: '-4px 0 0 5px'
                      }}
                    />
                  </span>
                  <span className="dv_review_against">
                    Review against <strong>salon at home </strong> from{' '}
                    <a href="javascript:void(0);">Sanjay sakpal </a>
                  </span>
                  <span className="dv_review_txt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </span>
                  <div className="dv_review_date_time">
                    20/20/2020, 05:15 PM{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
              <div className="dv_review_cards">
                <img src="data:image/jpeg;base64,UklGRkYDAABXRUJQVlA4IDoDAADwEQCdASpQAFAAPt1Wp0yopCOiMLTsqRAbiWMAyeWT3JI9GKvzTSr3TejDsMYKK19euSJoso2vsFCUN9+yy4EGOUzPpOWucU5F9wqR0oovb+0YH5xUsInOEuQtoWeVemxA+Kj1RihXELwid5iZmeHB9DIQGx4oiYl9UOTWJmBB/Z5eeehjKgNFkSrX9LkcHFxf9arJRVzSaAD++fDgoseDsVbxb76aYIFjoKqb3i5PELqn7uOfM/puC4zeKMc5gKO/gbmti8GQ2oItHhw0FWXSueiKsw5crEyfJ/xIrzD2ZYICiNtYMnCgn3WOAvz/wPLyttn1P2KDnL/ENTPhxSq8aob8wiWvBjLUc4irGhwrBGLxWi+KjZBn9KYUHwOFduFyWDdmPRxlqh1d5N+lcGxqL07troelvZ78Tp1lZzJXgp1U1DoUdiLmCfme5JWHJdfJZpfFZyX40noWzSIhCDQBnyOBm6IJIArR77ckdMH9l2283jqhI21cPOzwnwirZOBsPfFJUNvczQI/WBNRay0aBSMkMACDmRLwF9K487kouE/t28kaCLwGJOtDS7tTANSr5r4lV9l9dssjHrKRZV/DYlk9LVZLKG17W4ow019NJx+SzTVacU/o/WfflFMFRBzKB23Q7Ici6eeOf4pK2HybcPcNMSifUOp8qbR+fIwhxmMWrF5AsvEtWXfrsPvPeFQu4pGpSQUKgH9yCgbtIgN+GrCPMCxIyD2psVReB9Gsb8OAMUprtWnmSC1HW0icBfc/Ry/HkEPWW2rNHuaa7LJ1yAJJJ5iu+ejjXC5OSXq1Ctts222yow0zfOIzduHDWsuDHlPXAZDzDjL48PExYL3XztD06J4xtCciCadvE97xW8/4GeNwTT1s81KaMqB1HgvMbgItlsWL1J+5KVtC3csM5iZLsowdC88H9vAMWjlSRjk+eZSWrju6M2HwEL6Ii1dtxfE0VLdrcWM5OHP4Cxb+jzkcZLbJ4a7cyJToJDjALL5wqgXrifeY8TQfNCcUHbAxIZJj1/U2tsjyLDzFywQpmvyrfG4vPM/y2xoz5VmIhSCZ67gW+3kqNkej2PUKlm1GUJHZVGHr3QAA" />
                <div className="dv_review_holder_name_review">
                  <span className="dv_name_holder">
                    <img
                      className="mr-2"
                      src="/images/svgs/tick.svg"
                      height="20"
                      width="20"
                    />
                    Monika Jadhav
                  </span>
                  <span className="dv_review_against">
                    Review against <strong>Cleaners </strong> from{' '}
                    <a href="javascript:void(0);">Rahul Gandhi </a>
                  </span>
                  <span className="dv_review_txt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </span>
                  <div className="dv_review_date_time">
                    20/20/2020, 05:15 PM{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="dv_pagination">
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-left"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">1</a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dv_active_page">
                    2
                  </a>
                </li>
                <li>...</li>
                <li>
                  <a href="javascript:void(0);">3</a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;