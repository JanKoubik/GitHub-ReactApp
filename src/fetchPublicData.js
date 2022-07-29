import { Link } from "react-router-dom";
import useFetch from "./CustomHook";

const FetchPublicData = () => {


    let {data, error, loadingMessage} = useFetch("https://ghibliapi.herokuapp.com/films")


    return ( 
        <div className="FetchPublicData">
            

            <h2>Studio Ghibli films</h2>
            {loadingMessage && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                data.map((dataItems) => (
                    <div className="useFetchFilms" key={dataItems.id}>
                        <Link to={`/data/${dataItems.id}`}>
                            <p>{dataItems.title}</p>
                        </Link>
                    </div>
                ))
            )}

        </div>
     );
}
 
export default FetchPublicData;