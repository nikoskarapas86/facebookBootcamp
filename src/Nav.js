import { useNavigate } from "react-router-dom";


export default function Nav(){
    let navigate =useNavigate();
    function logout(){
        localStorage.clear();
        navigate("/login");
    }
    return(
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">Facebook</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="home.html">Home</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a onClick={logout} href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    )
}