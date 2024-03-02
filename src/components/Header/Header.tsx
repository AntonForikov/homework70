import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-primary px-3">
      <Link to='/' className="navbar-brand">Contacts</Link>
      <Link to='new-contact' className='btn btn-success'>Add new contact</Link>
    </header>
  );
};

export default Header;