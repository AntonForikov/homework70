import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../app/hooks';
import {addNewContact} from '../../store/contactsThunk';

interface Props {
  edit?: boolean
}

const initialInputs = {
    name: '',
    phone: '',
    email: '',
    photo: ''
  };
const AddEdit: React.FC<Props> = ({edit = false}) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialInputs);
  const dispatch = useAppDispatch();
  console.log(edit);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs((prevState) => {
      return{
        ...prevState,
        [name]: value
      };
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(addNewContact(inputs));
    navigate('/');
  };

  return (
    <main className='px-3'>
      <h1>Add new contact</h1>
      <form onSubmit={onFormSubmit}>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="name">Name:</label>
          <input className="form-control w-75" type="text" name="name" id="name" onChange={changeInput} value={inputs.name} required/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="phone">Phone:</label>
          <input className="form-control w-75" type="text" name="phone" id="phone" onChange={changeInput} value={inputs.phone} required/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="email">Email:</label>
          <input className="form-control w-75" type="email" name="email" id="email" onChange={changeInput} value={inputs.email} required/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="photo">Photo:</label>
          <input className="form-control w-75" type="text" name="photo" id="photo" onChange={changeInput} value={inputs.photo}/>
        </div>
        <div className="d-flex my-2">
          <span className='me-3'>Photo preview:</span>
          <img
            src={inputs.photo}
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