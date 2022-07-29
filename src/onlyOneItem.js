import { useParams } from "react-router-dom";
import useFetch from "./CustomHook";


const OnlyOneItem = () => {

    const {id} = useParams();
    let {data, error, loadingMessage} = useFetch("https://ghibliapi.herokuapp.com/films/" + id)

    console.log(data)

    return ( 
        <div className="OnlyOneItem">

            
            {loadingMessage && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    <h2>Podrobnosti o filmu - {data.title}</h2>
                    <h3>Producent - {data.producer}</h3>
                    <h3>Ředitel - {data.director}</h3>
                    <h3>Originální název - {data.original_title_romanised}</h3>
                    <h3>Datum vydání - {data.release_date}</h3>
                    <h3>Film - minuty - {data.running_time}</h3>
                </div>
            )}

        </div>
     );
}
 
export default OnlyOneItem;