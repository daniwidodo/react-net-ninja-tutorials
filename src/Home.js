import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
  // let name = 'mario';

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // LOGS //
  console.log("from Home component :", blogs);

 

  return (
    <div className="home">
      {error && <div> gak bisa ambil data </div>}
      {isPending && <div>loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
