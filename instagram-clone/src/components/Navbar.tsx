import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

   const Navbar = () => {
     const user=useSelector((state:any)=>state.user);
        return ( 
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
            <img src="/img/insta-logo.png"/>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"    aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search">
          <input placeholder="&#xF002; Search"/>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/landing">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-door-fill"></i></a>
            </li>
            </Link>
            <Link to="/message">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-chat"></i></a>
            </li> 
            </Link>
            <Link to="/image">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-compass"></i></a>
            </li> 
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-heart" onClick={()=>alert('Not functioning yet!')}></i></a>
            </li> 
            <Link to="/profile">
            <li className="nav-item">
             <img className="profile_picture" src={user.profilepicture} alt="load nahi ho paai"/>  
            </li>   
            </Link>     
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
         );
    }
    
    export default Navbar;