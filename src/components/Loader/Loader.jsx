import NewLoader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
  return (
    <NewLoader
      type="Watch"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default Loader;
