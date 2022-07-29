import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <div className="NavBar-BarForBars">
                <div className="NavBar-middlePlace">
                    <h3><span><Link to={"/"}>Home</Link></span><span> BackPack</span></h3> 

                </div>
            </div>
        </div>
     );
}
 
export default NavBar;