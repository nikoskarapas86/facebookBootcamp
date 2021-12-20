import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
     let navigate =useNavigate();
  function handleLogin(e) {
    console.log("submit form");
    e.preventDefault();
    localStorage.setItem("loggedIn", true);
    navigate("/main");
  }
 
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <input
            className="btn btn-primary more-space"
            type="submit"
            name="login"
            value="Login"
          />
        </div>
        <Link to="/subscriber">Subscribe</Link>
      </form>
    
    </div>
  );
}
