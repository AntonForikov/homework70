import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import AddEdit from './containers/AddEdit/AddEdit';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='new-contact' element={<AddEdit />} />
      </Routes>
    </>
  );
}

export default App;
