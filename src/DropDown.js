import useFetch from "./useFetch";
import { useState } from "react";
import FadeBackGround from "./FadeBackGround";

const DropDown = () => {
    const [open, setOpen] = useState(false);

    // window.addEventListener("click", (e) => {
    //     // console.log(e.target.className);
    //     if (e.target.className === "filter-elements-li") {
    //         // console.log(e.target.innerHTML);
    //         let valHold = e.target.innerHTML;
    //     }
    // });
    window.addEventListener("click", (e) => {
        let varHold = e.target.innerHTML;
        if (e.target.className === "filter-elements-li") {
            document.querySelector(".filter-button-text").innerHTML = varHold;
            document.querySelector(".fade-bg").style.display = "none";
            setOpen(!open);
        }
    });
    <FadeBackGround />;

    const { data, loading, errormsg } = useFetch(
        "http://localhost:9000/filter"
    );

    return (
        <div className="drop-down-container">
            <button onClick={() => setOpen(!open)} className="search-filter">
                <p className="filter-button-text">All Categories</p>
            </button>
            {open && (
                <div className="drop-down-div">
                    {errormsg && <h1>{errormsg}</h1>}
                    {loading && <p>{loading}</p>}
                    {data &&
                        data.map((drop) => (
                            <div className="filter-elements-div" key={drop.id}>
                                <ul className="filter-elements-ul">
                                    <li className="filter-elements-li">
                                        {drop.type}
                                    </li>
                                </ul>
                            </div>
                        ))}
                </div>
            )}
            {open && FadeBackGround()}
        </div>
    );
};

export default DropDown;
