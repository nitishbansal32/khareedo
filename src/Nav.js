import PopUp from "./PopUp";
import Search from "./Search";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const Nav = ({ stripe, options }) => {
    return (
        <nav>
            <img src="" alt="logo" />
            <PopUp
                idMessage="Location"
                button1="Sign in to see your address"
                button2="Enter"
                imgsrc="../Images/cross.png"
                placeHolder="Enter PIN"
            />
            <Search />
            <DropDown
                DropDownClass="nav-btn"
                url="https://countriesnow.space/api/v0.1/countries/flag/images"
                imgsrc=""
                CondTextImg="true"
            />
            <button className="nav-elements">
                <Link className="nav-elements-li" to="/cart">
                    Cart
                </Link>
            </button>
        </nav>
    );
};

export default Nav;
