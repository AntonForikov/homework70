import {useAppDispatch} from '../../app/hooks';
import {getContactsList} from '../../store/contactsThunk';
import ContactItem from '../../components/ContactItem/ContactItem';

const Home = () => {
  const dispatch = useAppDispatch();

  const test = () => {
    dispatch(getContactsList('345'));
  };
  return (
    <main>
      <ContactItem
        image={'https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_FMjpg_UX1000_.jpg'}
        id='5'
        name='test'
        onClick={test}
      />
      <ContactItem
        id='5'
        name='test'
        onClick={test}
      />
    </main>
  );
};

export default Home;