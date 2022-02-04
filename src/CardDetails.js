import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CardDetails = () => {
    const { id } = useParams();
    const {
        data: details,
        loading,
        errormsg,
    } = useFetch("http://localhost:8000/product/" + id);

    return (
        <>
            {errormsg && <h1>{errormsg}</h1>}
            {loading && <p>Loading.....</p>}
            {details && (
                <div className="card-details-container">
                    <h1>{details.name}</h1>
                    <img src={details.img} alt="" />
                    <p>{details.location}</p>
                    <p>{details.price}</p>
                </div>
            )}
        </>
    );
};

export default CardDetails;
