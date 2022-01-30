import DropDown from "./DropDown";

const Search = () => {
    return (
        <div className="search-bar">
            <button className="search-icon">
                <img src="" alt="search-icon" />
            </button>
            <div className="search-query"></div>
            <DropDown />
        </div>
    );
};

export default Search;
