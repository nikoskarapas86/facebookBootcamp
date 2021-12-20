import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function Main() {
  let navigate = useNavigate();
  const isLoggedIn = !Boolean(localStorage.getItem("isLoggedin"));

  return (
    <>
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <img className="img-cl"
                  src="img/logo.jpg"
                  width="100%"
                  
                />
                <h4>PeopleCert</h4>
                <p>@peoplecert.org</p>
              </div>
            </div>        
          </div>
        </div>
      </main>
    </>
  );
}
