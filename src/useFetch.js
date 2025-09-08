// command to launch db.json
// npx json-server --watch data/db.json --port 8000

import { useState, useEffect, useRef } from "react";

const useFetch = (url) => { // custom hooks need to start with 'use' word

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        // runs after every render and initial startup ; rendering occurs when state changes (else e.g = delete blog) , WHEN NO DEPENDENCY ARRAY GIVEN  
        console.log('use effect ran');
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error('Cant fetch data');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    console.log("got data");
                    setIsPending(false);
                    setError(null);

                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                        // aborts the fetch in case we move to other page from main API call page
                    } else {
                        setError(err.message);
                        setIsPending(false); // removes loading in case of error
                    }
                })
        }, 500);
        return () => abortCont.abort();
    }, [url]);
    // useEffect runs after url change ; url is a dependency
    return { data, isPending, error };
}
export default useFetch;