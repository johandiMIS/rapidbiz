import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<div> private route here</div>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
