import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Login from './pages/login';
import PostDetail from './pages/postdetail/postdetail';

function App() {
  const name = "Krystian";
  const names = ['Adrian', 'Maciek', 'Pawel', 'Bartek'];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;