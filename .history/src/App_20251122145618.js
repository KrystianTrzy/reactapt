import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Login from "./pages/login";
import PostDetail from "./pages/postdetail/postdetail";
import Nav from "./components/nav/nav";
import Dashboard from "./pages/dashboard/dashboard";
import { ThemeProvider } from "./context/themecontext";

function App() {
  const name = "Krystian";
  const names = ["Adrian", "Maciek", "Pawel", "Bartek"];
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;