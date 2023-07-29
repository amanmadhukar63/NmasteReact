import LOGO_URL from "../utils/constants";

const Navbar=()=>(
    <div className="nav-bar">
        <div className="nav-left-component">
            <img className="logo" src={LOGO_URL} alt="Foody" />
            <h4>Location</h4>
        </div>
        <div className="nav-right-component">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Navbar;