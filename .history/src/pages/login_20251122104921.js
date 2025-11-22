
function Login() {
return (
    <>
    <h1 style={{ color: 'blue' }}>login uzytkowika</h1>
    <div className="login-form">
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Hasło" />
        <button>Zaloguj się</button>
    </div>

    </>
)

}

export default Login;