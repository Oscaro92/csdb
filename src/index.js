// * import lib
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * import css
import './index.css';

//* import page
import App from './App';
import Capoeira from './pages/Capoeira'
import Lesson from './pages/Lesson'
import Graduation from './pages/School/Graduation'
import Prof from './pages/School/Prof'
import SDB from './pages/School/SDB'
import Error from './pages/404'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/capoeira" element={<Capoeira/>} />
            <Route path="/cours-events" element={<Lesson/>} />
            <Route path="/notre-ecole/graduation" element={<Graduation/>} />
            <Route path="/notre-ecole/prof" element={<Prof/>} />
            <Route path="/notre-ecole/sdb" element={<SDB/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
