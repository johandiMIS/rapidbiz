import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import '@fontsource/roboto/300.css';
import ForgetPassword from './components/auth/ForgetPassword';
import Home from './components/pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import Warehouse from './components/warehouse/Warehouse';
import WarehouseDetail from './components/warehouse/WarehouseDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F04832"
    },
    secondary:{
      main: "#EFF5FC"
    }
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/warehouse' element={<Warehouse/>}/>
            <Route path='/warehouse/:id' element={<WarehouseDetail/>}/>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>    
  );
}

export default App;
