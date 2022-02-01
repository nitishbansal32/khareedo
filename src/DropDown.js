import useFetch from "./useFetch";
import { useState } from "react";
import FadeBackGround from "./FadeBackGround";

const DropDown = () => {
    const [open, setOpen] = useState(false);

    // window.addEventListener("click", (e) => {
    //     let varHold = e.target.innerHTML;
    //     if (e.target.className === "filter-elements-li") {
    //         document.querySelector(".filter-button-text").innerHTML = varHold;
    //         // document.querySelector(".fade-bg").style.display = "none";
    //         // setOpen(!open);
    //     }
    // });

    const { data, loading, errormsg } = useFetch(
        "http://localhost:9000/filter"
    );

    return (
        <>
            <div className="drop-down-container">
                <button
                    onClick={() => setOpen(!open)}
                    className="search-filter"
                >
                    <p className="filter-button-text">All Categories</p>
                </button>
                {open && (
                    <div className="drop-down-div">
                        {errormsg && <h1>{errormsg}</h1>}
                        {loading && <p>{loading}</p>}
                        {data &&
                            data.map((drop) => (
                                <div
                                    className="filter-elements-div"
                                    key={drop.id}
                                >
                                    <ul
                                        onClick={() => setOpen(!open)}
                                        className="filter-elements-ul"
                                    >
                                        <li className="filter-elements-li">
                                            {drop.type}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                )}
            </div>

            <FadeBackGround fadeOption={open} />
        </>
    );
};

export default DropDown;
