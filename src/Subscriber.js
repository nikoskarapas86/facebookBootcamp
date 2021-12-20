import { useNavigate } from "react-router-dom";

export default function Subscriber() {
let nagigate =useNavigate()
  function goToLogin(e){
    e.preventDefault()
nagigate("/login")
  }
  return (
    <>
      <h4>Don't have an account yet? Register!</h4>
      <form onSubmit={goToLogin}>
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
            type="text"
            name="location"
            placeholder="Location"
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
            className="btn btn-success"
            type="submit"
            name="register"
            value="Register"
          />
        </div>
      </form>
    </>
  );
}
