import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import GetAll from './GetAll';
import GetById from './GetById';
import InsertFood from './InsertFood';
import UpdateFood from './UpdateFood';
import EditFood from './EditFood';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<GetAll/>}/>
      <Route path='/food/:id' element={<GetById/>}/>
      <Route path='/food/add' element={<InsertFood/>}/>
      <Route path='/food/edit/:id' element={<EditFood/>}/>
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

