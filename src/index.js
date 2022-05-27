import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Profile from './features/Profile/Profile'
// import Clock from './features/Clock/Clock'
// import { PicSearch } from './components/PicSearch/PicSearch'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>


    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}> 
        <Route path="clock-app" element={<Clock/>}/>
        <Route path="profile-app" element={<Profile/>}/>
        <Route path="picsearch-app" element={<PicSearch/>}/>
       
      </Route>
      <Route path="/" element={<App/>}/>

    </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
