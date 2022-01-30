import './App.css';
import Header from './Components/Header.js';
import Login from './Components/Login.js';
import BecomeAMentor from './Components/BecomeAMentor.js';
import MentorshipGuidelines from './Components/MentorshipGuidelines.js';
import Mentors from './Components/Mentors.js';
import About from './Components/About.js';
import React, {Component} from 'react';
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Routes>
                <Route exact path='/' element={< Header />}></Route>
                <Route path='/login' element={< Login />}></Route>
                <Route path='/become-a-mentor' element={< BecomeAMentor />}></Route>
                <Route path='/mentorship-guidelines' element={< MentorshipGuidelines />}></Route>
                <Route path='/mentors' element={< Mentors />}></Route>
                <Route path='/about' element={< About />}></Route>  
                <Route path='/signup' element={< SignUp />}></Route>
            </Routes>
        </div>
      </Router>
    );
  }
}
export default App;