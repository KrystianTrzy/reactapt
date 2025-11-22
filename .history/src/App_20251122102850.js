import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';

function App() {
  const name = "Krystian";
  const names = ['Adrian', 'Maciek', 'Pawel', 'Bartek'];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;