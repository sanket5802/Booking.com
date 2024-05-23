import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import { Hotel } from './pages/Hotels/Hotels';
import { List } from './pages/List/List';
import { Home } from './pages/home/home';
import {Login} from './pages/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Hotels" element={<List/>}></Route>
          <Route path="/Hotels/:id" element={<Hotel />}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
