import useFetch from "./useFetch";

const Card = () => {
    const { data, loading, errormsg } = useFetch(
        "http://localhost:8000/product"
    );

    return (
        <div className="card-container">
            {errormsg && <h1>{errormsg}</h1>}
            {loading && <p>Loading.....</p>}
            {data &&
                data.map((prod) => (
                    <div className="cards" key={prod.id}>
                        <div className="card-img-div">
                            <img src={prod.img} alt="Some product" />
                        </div>
                        <div className="card-details">
                            <p>{prod.name}</p>
                            <span>{prod.price}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Card;
