import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getContactsList} from '../../store/contactsThunk';
import ContactItem from '../../components/ContactItem/ContactItem';
import {selectContactsList, selectLoading} from '../../store/contactsSlice';
import {useEffect} from 'react';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const contactList = useAppSelector(selectContactsList);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  return (
    <main>
      {isLoading ? <div className='d-flex justify-content-center mt-3'><Spinner/></div> : contactList.map((contact) => {
        return <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          image={contact.photo}
          phone={contact.phone}
          email={contact.email}
        />;
      })}
    </main>
  );
};

export default Home;