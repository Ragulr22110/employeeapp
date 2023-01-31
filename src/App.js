// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Employee from './Components/Employee'

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Employee' exact element={<Employee/>}/>
    </Routes>


    </BrowserRouter>
  )
    
}

export default App;
