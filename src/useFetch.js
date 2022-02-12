import { useEffect, useState } from "react";
const useFetch = (url) => {
    // STATES //
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
        // console.log("use Effect running", name);
        const abortControlller = new AbortController();
    
        setTimeout(() => {
          //
          fetch(url, { signal: abortControlller.signal })
            .then((res) => {
              // console.log(res);
              // if OK
              if (!res.ok) {
                throw Error("gak bisa ambil data!");
              }
              //
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch((err) => {
              if (err.name === 'AbortError'){
                console.log('fetch aborted')
              }
              setIsPending(false);
              setError(err.message);
              console.log(err.message);
            });
        }, 1000);
        return () => abortControlller.abort();
      }, [url]);

      return { data, isPending, error};
}



export default useFetch;