import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import '@fontsource/roboto/300.css';
import ForgetPassword from './components/auth/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<div> private route here</div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
