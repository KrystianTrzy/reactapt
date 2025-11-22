import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/posts");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>login uzytkowika</h1>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={formData.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Hasło"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Zaloguj się</button>
      </form>
    </>
  );
}

export default Login;
