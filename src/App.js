import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
export const API =
  "https://strangers-things.herokuapp.com/api/2110-ftb-et-web-pt";
import { Posts, Register, Navbar, Home } from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`${API}/posts`);
    const info = await response.json();
    console.log(info);
    setPosts(info.data.posts);
  };

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      setToken(lsToken);
    }
    console.log(lsToken);
    const resp = await fetch(`${API}/users/me`, {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });

    const info = await resp.json();

    if (info.success) {
      setUser(info.data);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [token]);

  return (
    <>
      <Navbar user={user} setToken={setToken} setUser={setUser} />

      <div id="main-section">
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/posts">
          <Posts posts={posts} />
        </Route>
        <Route exact path="/register">
          <Register setToken={setToken} />
        </Route>
      </div>
    </>
  );
};

export default App;
