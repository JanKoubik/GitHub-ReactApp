import { useParams } from "react-router-dom";
import useFetch from "./CustomHook";

const OnlyOneItem = () => {

    const {id} = useParams();
    let {data, error, loadingMessage} = useFetch("https://ghibliapi.herokuapp.com/films/" + id)

    


    return ( 
        <div className="OnlyOneItem">
            
            {loadingMessage && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div className="OnlyOneNameInfo">
                    <h2>Podrobnosti o filmu - {data.title}</h2>
                    <h3><span>Producent - </span>{data.producer}</h3>
                    <h3><span>Ředitel - </span>{data.director}</h3>
                    <h3><span>Originální název - </span>{data.original_title_romanised}</h3>
                    <h3><span>Datum vydání - </span>{data.release_date}</h3>
                    <h3><span>Film trvá </span>{data.running_time} minut.</h3>
                </div>
            )}

        </div>
        
     );
}

export default OnlyOneItem;