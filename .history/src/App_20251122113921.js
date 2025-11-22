import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Login from './pages/login';


function App() {
  const name = "Krystian";
  const names = ['Adrian', 'Maciek', 'Pawel', 'Bartek'];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postdetail/:id" element={<Postdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;