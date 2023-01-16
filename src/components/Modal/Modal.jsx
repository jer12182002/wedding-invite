import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss';

const ModalContainer = ({ title, modalHeader, modalContent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal-container'>
      <Button className='modal-btn' variant='primary' onClick={handleShow}>
        {title}
      </Button>
      <Modal contentClassName='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content-container'>
          {modalContent}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalContainer;
