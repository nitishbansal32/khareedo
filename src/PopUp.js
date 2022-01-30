import { useState } from "react";

const PopUp = ({ idMessage, button1, button2, imgsrc, placeHolder }) => {
    const [open, setOpen] = useState(false);
    window.addEventListener("click", (event) => {
        console.log(event.target.className);
        if (event.target.className === "close") {
            document.querySelector("#Location").style.display = "none";
            document.querySelector(".fade-bg").style.display = "none";
        }
    });
    function fadeBackground() {
        document.querySelector(".fade-bg").style.display = "block";
    }

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="btn btn-primary"
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
                        <img className="close" src={imgsrc} alt="Cross" />
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

            {open && fadeBackground()}
        </>
    );
};

export default PopUp;
