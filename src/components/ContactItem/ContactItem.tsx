import React from 'react';

interface Props {
  id: string
  name: string
  image?: string
  onClick: React.MouseEventHandler
}

const ContactItem: React.FC<Props> = ({name, image= '', onClick}) => {
  return (
    <div
      className='d-flex align-items-center border rounded m-3'
      style={{cursor: 'pointer'}}
      onClick={onClick}
    >
      <img
        src={image === ''
          ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
          : image
        }
           alt={name}
        width={100}
      />
      <h3 className='ms-3'>{name}</h3>
    </div>
  );
};

export default ContactItem;