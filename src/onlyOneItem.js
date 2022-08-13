
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./CustomHook";

const OnlyOneItem = () => {

    const {id} = useParams();
    let {data, error, loadingMessage} = useFetch("https://ghibliapi.herokuapp.com/films/" + id)

    let [loadingButtonMassage, setLoadingButtonMessage] = useState(false)
    

    const addHandleFavouriteClick = () => {

        setLoadingButtonMessage(true)
        let title = data.title
        const filmsDatabase = {title}

        setTimeout(() => {
    
            fetch("http://localhost:8000/films", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(filmsDatabase)
            }).then(() => {
                console.log("Nový film přidán.")
                setLoadingButtonMessage(false)
            })

        },750)

        
    }


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
                    <h3><span>Film trvá  </span>{data.running_time} minut.</h3>
                    {!loadingButtonMassage && <button onClick={addHandleFavouriteClick}>Přidat film do oblíbených</button>}           
                    {loadingButtonMassage && <button onClick={addHandleFavouriteClick}>Přidávám film do oblíbených...</button>}           
                </div>
            )}

        </div>
        
     );
}

export default OnlyOneItem;