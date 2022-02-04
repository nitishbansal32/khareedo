import useFetch from "./useFetch";
import { useState } from "react";
import FadeBackGround from "./FadeBackGround";

const DropDown = ({
    DropDownClass,
    url,
    imgsrc,
    CondOnlyText,
    CondTextImg,
}) => {
    const [open, setOpen] = useState(false);
    const [textHold, settextHold] = useState("All Categories");
    const [ImgTextHold, setImgTextHold] = useState("IND");
    const [imgHold, setImgHold] = useState(
        "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
    );
    const { data, loading, errormsg } = useFetch(url);

    return (
        <>
            <div className="drop-down-container">
                <button
                    onClick={() => setOpen(!open)}
                    className={DropDownClass}
                >
                    {CondOnlyText && (
                        <p className="filter-button-text">{textHold}</p>
                    )}
                    {CondTextImg && (
                        <div className="img-btn-div">
                            <p className="img-btn-text">{ImgTextHold}</p>
                            <img
                                className="drop-down-img"
                                src={imgHold}
                                alt="imgHold"
                            />
                        </div>
                    )}
                </button>
                {open && (
                    <div className="drop-down-div">
                        {errormsg && <h1>{errormsg}</h1>}
                        {loading && <p>{loading}</p>}
                        {data &&
                            CondOnlyText &&
                            data.map((drop) => (
                                <div
                                    className="filter-elements-div"
                                    key={drop.id}
                                >
                                    <ul
                                        onClick={() => setOpen(!open)}
                                        className="filter-elements-ul"
                                    >
                                        <li
                                            onClick={() =>
                                                settextHold(drop.type)
                                            }
                                            className="filter-elements-li"
                                        >
                                            {drop.type}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        {data &&
                            CondTextImg &&
                            data.data.map((drop) => (
                                <div
                                    className="filter-elements-div"
                                    key={drop.iso3}
                                >
                                    <ul
                                        onClick={() => setOpen(!open)}
                                        className="filter-elements-ul"
                                    >
                                        <li
                                            onClick={() => {
                                                setImgTextHold(drop.iso3);
                                                setImgHold(drop.flag);
                                            }}
                                            // className="filter-elements-li"
                                        >
                                            <p>{drop.iso3}</p>
                                            <img
                                                className="drop-down-img"
                                                src={drop.flag}
                                                alt=""
                                            />
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

// {
//     CondTextImg && (
//         <li
//             onClick={() => {
//                 setImgTextHold(drop.iso3);
//                 setImgHold(drop.flag);
//             }}
//             className="filter-elements-li"
//         >
//             <div className="img-elements-li">
//                 <p>{drop.type}</p>
//                 <img src={drop.flag} alt="" />
//             </div>
//         </li>
//     );
// }
