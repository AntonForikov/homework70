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
        <Route path='edit-contact/:id' element={<AddEdit edit={true}/>} />
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
