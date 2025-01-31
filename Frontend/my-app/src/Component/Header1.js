
import { Link } from "react-router-dom";


function Header()
{
    return(
  
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home Care Connect
    <br></br>
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQY9TJRm1ViLT1CE-a56eKcehKKOCEutgVcw&s' class='logoImg'/>*/}</Link> 
    <div className="container pb-1 pt-2">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="login">Login</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="register">Sign Up</Link>
        </li> */}
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Login
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item"  to="admin">Admin</Link></li>
            <li><Link class="dropdown-item" to="agent">Agent</Link></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><Link class="dropdown-item"  to="login">User</Link></li>
          </ul>
        </li>
         

        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
  </div>
</nav>
    )

}
export default Header;