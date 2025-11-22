function Login() {
  return (
    <>
      <div className="login-form">
        <h1>login uzytkowika</h1>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Hasło" />
        <button>Zaloguj się</button>
      </div>
    </>
  );
}

export default Login;
