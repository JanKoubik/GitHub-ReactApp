import DataFilter from "./DataFilter";
import NavBar from "./navBar";

const Home = () => {
    return ( 
        <div className="Home">
            <NavBar />
            <DataFilter />
            <h2>Ahoj</h2>
        </div>
     );
}
 
export default Home;