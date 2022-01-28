const Nav = () => {
    function findMyLocation(e) {
        e.preventDefault();
        alert("Submit button clicked");
    }
    return (
        <nav>
            <img src="" alt="logo" />
            <button onClick={findMyLocation} className="location">
                Location
            </button>
            <div className="search-bar">
                <button className="search-icon">
                    <img src="" alt="search-icon" />
                </button>
                <div className="search-query"></div>
                <button className="search-filter">
                    <img src="" alt="search-filter" />
                </button>
            </div>
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
