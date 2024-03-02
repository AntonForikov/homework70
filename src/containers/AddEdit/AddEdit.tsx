import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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
  const [inputs, setInputs] = useState(initialInputs);
  // const input = useAppSelector(selectUserInputs);
  // const dispatch = useAppDispatch();
  console.log(edit);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs((prevState) => {
      return{
        ...prevState,
        [name]: value
      };
    });
    console.log(inputs);
  };

  return (
    <main className='px-3'>
      <h1>Add new contact</h1>
      <form>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="name">Name:</label>
          <input className="form-control w-75" type="text" name="name" id="name" onChange={changeInput} value={inputs.name} />
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="phone">Phone:</label>
          <input className="form-control w-75" type="text" name="phone" id="phone" onChange={changeInput} value={inputs.phone}/>
        </div>
        <div className="d-flex w-25 align-items-center justify-content-between my-2">
          <label htmlFor="email">Email:</label>
          <input className="form-control w-75" type="text" name="email" id="email" onChange={changeInput} value={inputs.email}/>
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