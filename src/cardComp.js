import useFetch from "./useFetch";

const Card = () => {
    const { data, loading, errormsg } = useFetch(
        "http://localhost:8000/product"
    );
    return (
        <div className="card-row">
            {errormsg && <h2>{errormsg}</h2>}
            {loading && <p>Loading.....</p>}
            {data &&
                data.map((prod) => (
                    <div className="cards" key={prod.id}>
                        <img src={prod.img} alt="Some product" />
                        <p>{prod.name}</p>
                        <span>{prod.price}</span>
                    </div>
                ))}
        </div>
    );
};

export default Card;
