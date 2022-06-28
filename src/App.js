import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import TakeNoteOne from './components/TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from './components/TakeNoteTwo/TakeNoteTwo';
import TakeNoteThree from './components/TakeNoteThree/TakeNoteThree';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import DashBoard from './pages/Dashboard/dashboard';
import Router from './components/router/router';
// import { Provider } from 'react';
import { store } from './components/redux/store';
import  { Provider } from 'react-redux'

function App() {
  return (
    <div>
     
      <Provider store={store}>
      <Router/>
      </Provider>


    </div>
  );
}

export default App;
