import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "../App";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Password does not match!");
      return;
    }

    const resp = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const info = await resp.json();
    console.log(info);
    if (info.error) {
      setError(info.error.message);
    }
    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);

    history.push("/");
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          minLength={6}
          placeholder="Enter Username.."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          minLength={6}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="Submit"> Register </button>
      </form>
      <p>{error}</p>
    </>
  );
};

export default Register;
