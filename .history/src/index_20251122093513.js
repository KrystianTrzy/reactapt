import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import LikeCounter from './components/App/LikeCounter/LikeCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
      <h1>witam</h1>
      <LikeCounter />
      <LikeCounter 
        title="1"
        description="1"
        
      />

      <LikeCounter
        title="2"
        description="2"
      />

      <LikeCounter
        title="3"
        description="3"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

