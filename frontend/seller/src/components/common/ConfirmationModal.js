import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';
import { X } from 'react-feather';

const ConfirmationModal = ({ isOpen, close, question }) => {
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header>
        <Modal.Title>{question || 'Are you sure?'}</Modal.Title>
        <X
          size={24}
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={close}
        />
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Button
            className="mx-2"
            id="confirmation_yes"
            variant="success"
            autoFocus={true}
          >
            YES
          </Button>
          <Button className="mx-2" variant="danger" onClick={close}>
            NO
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  question: PropTypes.string
};

export default ConfirmationModal;
