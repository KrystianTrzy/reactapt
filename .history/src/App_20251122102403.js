
function App() {
  const name = "Krystian";
  const names =['Adrian', 'Maciek', 'Pawel', 'Bartek'];
  return (
    <BrowserRouter>
    <Routers>
      <Router path="/" element={<Posts />}></Router>
    </Routers>
    </BrowserRouter>
  );
}

export default App;