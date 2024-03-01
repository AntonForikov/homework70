import {useAppDispatch} from '../../app/hooks';
import {getContactsList} from '../../store/contactsThunk';

const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(getContactsList());
  return (
    <div>

    </div>
  );
};

export default Home;