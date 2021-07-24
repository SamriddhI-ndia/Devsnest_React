const Home = ({logged,setLogged}) => {
   
    return ( 
        <center>
        <div className="home">
            <h1>Home</h1>
            <h2>If not logged in can't access, Profile & Dashboard</h2>
            <button onClick={()=>{
                    logged?(setLogged(0)):(setLogged(1))
                }}>
                {
                logged?('Log out'):('Log in')
                }
            </button>
        </div>
        </center>
     );
}
 
export default Home;