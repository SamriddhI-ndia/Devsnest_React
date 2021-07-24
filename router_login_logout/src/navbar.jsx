import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

const Navbar = ({logged,setLogged}) => {
    console.log(logged);
    return ( 
        <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {
            logged ?(
                <>
                <Link to="/profile" >Profile</Link>
                <Link to="/dashboard" >Dashboard</Link>
                </>
            ):
            (
                <>
                <Link to="/">Profile</Link>
                <Link to="/">Dashboard</Link>
                </>
            )
        }
        
        </div>
     );
}
 
export default Navbar;