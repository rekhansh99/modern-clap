import React from 'react';

const BookingCard = props => {
  let statusColor;
  switch (props.status) {
    case 'completed':
      statusColor = 'bg-success';
      break;
    case 'cancelled':
      statusColor = 'bg-danger';
      break;
    default:
      statusColor = 'bg-primary';
  }

  return (
    <div className="dv_mybooking_cards">
      <div className="dv_service_name">{props.serviceName}</div>
      <div className="dv_date_booking">{props.bookingDate}</div>
      <span className={'dv_status_upcoming ' + statusColor}>
        {props.status}
      </span>
      <div className="dv_card_details" style={{ color: props.detailsColor }}>
        {props.cardDetails}
      </div>
    </div>
  );
};

export default BookingCard;
