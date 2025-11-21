import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const name = "krystian";
  const names = ["Anna", "Bob", "Charlie", "David", "Eve"];
  return (
    <div className="App">
      <p> {name.length > 4 ? name : 'Hello friends!'}</p>
      <p>{names.map((name => <li key={name}>{name}</li>))}</p>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

