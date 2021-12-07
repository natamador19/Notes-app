import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useSelector } from 'react-redux';
import NotesAdd from './components/NotesAdd';
import Splash from './components/Splash';
import {initiatedApp} from './store/reducers/app/action';
import RequireAuth from './components/UI/RequireAuth';
import Login from './components/Login';
import SignIn from './components/SignIn';
import NotesList from './components/NotesList';
import NotesModify from './components/NotesModify';
import Page from './components/Page';
import Dashboard from './components/Dashboard';
const Private =({children})=><RequireAuth redirectTo="/login">{children}</RequireAuth>
function App() {
  const {appInitiated,loading}=useSelector(({app})=>app);
  const dispatch=useDispatch();
  useEffect(()=>{
    initiatedApp(dispatch);
  },[]);
  return (
    <BrowserRouter>
    {(appInitiated)?(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/newNote" element={<Private><NotesAdd/></Private>}/>
        <Route path="/list" element={<Private><NotesList /></Private>} />
        <Route path="/NotesModify/:id" element={<Private><NotesModify /></Private>}/>
      </Routes>):(<Splash/>)
    }
    </BrowserRouter>
  );
}

export default App;
