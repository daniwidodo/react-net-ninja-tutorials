import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = 'mario';

  const [blogs, setBlogs] = useState( null );
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

   console.log("from Home component :", blogs);

  useEffect(() => {
    // console.log("use Effect running", name);

    setTimeout( () => {
      //
      fetch('http://localhost:8000/blogs')
      .then(res => {
        // console.log(res);
        // if OK
        if (!res.ok) 
        {
          throw Error('gak bisa ambil data!');
        }
        //
        return res.json();
      })
      .then( data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch( err => {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      })

    }, 1000 )
   

  }, []);

  return (
    <div className="home">
      { error && <div> gak bisa ambil data </div> }
      { isPending && <div>loading ...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs"  />}
     
     
    </div>
  );
};

export default Home;
