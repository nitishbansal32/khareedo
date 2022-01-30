import PopUp from "./PopUp";
import Search from "./Search";
const Nav = () => {
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

            <button className="country-picker">
                <img src="" alt="country" />
            </button>
            <div className="nav-elements">
                <ul>
                    <li>
                        <a href="/">Orders</a>
                    </li>
                    <li>
                        <a href="/">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
