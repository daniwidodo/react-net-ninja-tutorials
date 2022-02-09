import { useEffect, useState } from "react";
const useFetch = (url) => {
    // STATES //
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
        // console.log("use Effect running", name);
    
        setTimeout(() => {
          //
          fetch(url)
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
              setIsPending(false);
              setError(err.message);
              console.log(err.message);
            });
        }, 1000);
      }, [url]);

      return { data, isPending, error};
}



export default useFetch;