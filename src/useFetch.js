import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [errormsg, seterrormsg] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(
                url,
                { signal: abortCont.signal },
                { "Content-Type": "text/plain" }
            )
                .then((res) => {
                    if (!res.ok) {
                        throw Error("error hai vai");
                    }
                    return res.json();
                })
                .then((data) => {
                    setdata(data);
                    console.log(data);
                    setloading(false);
                    seterrormsg(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("Fetch Aborted");
                    } else {
                        setloading(false);
                        seterrormsg(err.message);
                    }
                });
        }, 100);

        return () => {
            abortCont.abort();
        };
    }, [url]);

    return { data, loading, errormsg };
};

export default useFetch;
