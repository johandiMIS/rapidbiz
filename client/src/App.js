import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<div> private route here</div>}/>
          <Route path='/login' element={<div>login</div>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
