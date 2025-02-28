
import './App.css';
import {  Routes,Route,BrowserRouter } from "react-router-dom";
import '@ant-design/v5-patch-for-react-19';
import'./stylesheet/alignment.css'
import './stylesheet/textelement.css'
import { Home } from './component/Home';
import { Login } from './pages/admin/Login';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path='/admin/login' element={<Login />} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
