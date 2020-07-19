import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';
import { X } from 'react-feather';

const ReviewModal = ({ isOpen, close }) => {
  return (
    <Modal show={isOpen} onHide={close}>
      {/* Modal Header */}
      <Modal.Header>
        <Modal.Title>MD12345 Review</Modal.Title>
        <X
          size={24}
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={close}
        />
      </Modal.Header>
      {/* Modal body */}
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse illum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non roident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Modal.Body>
    </Modal>
  );
};

ReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default ReviewModal;
