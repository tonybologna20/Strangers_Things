import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div id="navBar">
      <Link to="/"> Home</Link>
      <Link to="/posts"> Posts</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register"> Register</Link>
      <Link
        to="/"
        onClick={() => {
          setToken("");
          setUser([]);
          localStorage.removeItem("token");
        }}
      >
        Log Out
      </Link>
      {user && <span id="welcomeMessage"> Welcome {user.username} </span>}
    </div>
  );
};

export default Navbar;
