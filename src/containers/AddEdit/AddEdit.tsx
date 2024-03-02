import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  edit?: boolean
}
const AddEdit: React.FC<Props> = ({edit = false}) => {
  console.log(edit);
  return (
    <main className='px-3'>
      <h1>Add new contact</h1>
      <form>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="name">Name:</label>
          <input className="form-control w-75" type="text" name="name" id="name"/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="phone">Phone:</label>
          <input className="form-control w-75" type="text" name="phone" id="phone"/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="email">Email:</label>
          <input className="form-control w-75" type="text" name="email" id="email"/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="photo">Photo:</label>
          <input className="form-control w-75" type="text" name="photo" id="photo"/>
        </div>
        <div className="d-flex my-2">
          <span className='me-3'>Photo preview:</span>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
            alt='tesst'
            width={100}
          />
        </div>
        <button className='btn btn-primary me-3' type='submit'>Save</button>
        <Link to='/' className='btn btn-danger'>Back to contacts</Link>
      </form>
    </main>
  );
};

export default AddEdit;