import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';

interface Props {
  id?: string
  name: string
  image?: string
  email: string,
  phone: string
}

const ContactItem: React.FC<Props> = ({name, image= '', email, phone, id}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className='d-flex align-items-center border rounded m-3'
        style={{cursor: 'pointer'}}
        onClick={handleShow}
      >
        <img
          className='rounded'
          src={image === ''
            ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
            : image
          }
          alt={name}
          width={100}
        />
        <h3 className='ms-3'>{name}</h3>
      </div>

      {show &&
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex'>
              <div>
                <img src={image} alt={name} width={100}/>
              </div>
              <div className='ms-3'>
                <h5>Email: {email}</h5>
                <h5>Phone: {phone}</h5>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
            <Link className="btn btn-primary" to={`/edit-contact/${id}`} >
              Edit
            </Link>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default ContactItem;