
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const {appInitiated,loading}=useSelector(({app})=>app);
  const dispatch=useDispatch();
  useEffect(()=>{
    initiatedApp(dispatch);
  },[]);
  return (
    <BrowserRouter>
    {
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    }
    </BrowserRouter>
  );
}

export default App;
