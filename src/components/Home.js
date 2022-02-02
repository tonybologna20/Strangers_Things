import { useState } from "react";
import { API } from "../App";

const Home = ({ user }) => {
  const [login, setLogin] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    setError("");

    // if (login !== { user}) {
    //   setError("You are not logged in");
    //   return;
    // }

    const resp = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: {
          username: { login },
          password: { logPassword },
        },
      }),
    });
    const info = await resp.json();
    console.log(info);
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <h3> Login?</h3>
        <input
          required
          placeholder="Enter Username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <input
          required
          placeholder="Enter Password"
          value={logPassword}
          onChange={(e) => setLogPassword(e.target.value)}
        ></input>
        <button type="Submit"> Sign In</button>
      </form>
    </>
  );
};

export default Home;
