import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../image/logo.png'
import { Link } from 'react-router-dom'
function Nav(){
    return(
        <div classname="Nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Bootstrap" width="50" height="54"/>
          </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">our services</a>
              </li>
              <li class="nav-item">
                <Link to='/login' class="nav-link ">Dashboard</Link>
                {/* <a class="nav-link "  href='/'></a> */}
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
            </nav>
            </div>
    );
}
export default Nav;