import { useState } from "react";
import FadeBackGround from "./FadeBackGround";

const PopUp = ({ idMessage, button1, button2, imgsrc, placeHolder }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="pop-up-btn"
            >
                {idMessage}
            </button>

            {open && (
                <div
                    className="modal"
                    id={idMessage}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="pop-up-img-div">
                        <img
                            onClick={() => setOpen(!open)}
                            className="close"
                            src={imgsrc}
                            alt="Cross"
                        />
                    </div>

                    <button id="button-1-button">{button1}</button>
                    <div className="pop-up-form">
                        <form action="POST">
                            {/* <label>Enter Input</label> */}
                            <input
                                className="pop-up-form-input"
                                type="text"
                                placeholder={placeHolder}
                            />
                        </form>
                        <button id="button-2-button">{button2}</button>
                    </div>
                </div>
            )}

            <FadeBackGround fadeOption={open} />
        </>
    );
};

export default PopUp;
