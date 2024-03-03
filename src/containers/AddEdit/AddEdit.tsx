import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {addNewContact, updateContact} from '../../store/contactsThunk';
import {selectContactsList} from '../../store/contactsSlice';
import {ContactToSend} from '../../types';

interface Props {
  edit?: boolean
}

const initialInputs: ContactToSend = {
    name: '',
    phone: '',
    email: '',
    photo: ''
  };
const AddEdit: React.FC<Props> = ({edit = false}) => {
  const {id} = useParams();
  const contactList = useAppSelector(selectContactsList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(edit
    ? contactList.filter(contact => contact.id === id)[0]
    : initialInputs
  );


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
    if (edit) {
      await dispatch(updateContact(inputs))
    } else {
      await dispatch(addNewContact(inputs));
    }
    navigate('/');
  };

  return (
    <main className='px-3'>
      <h1>{edit ? 'Edit contact' : 'Add new contact'}</h1>
      <form onSubmit={onFormSubmit}>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="name">Name:</label>
          <input className="form-control w-75" type="text" name="name" id="name" onChange={changeInput} value={inputs.name} required/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="phone">Phone:</label>
          <input className="form-control w-75" type="tel" name="phone" id="phone" onChange={changeInput} value={inputs.phone} required/>
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