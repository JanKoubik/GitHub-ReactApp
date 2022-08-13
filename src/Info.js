import useFetch from "./CustomHook";
import img1 from "./images/logo-ghibli.png";
import { Link } from "react-router-dom";

const Info = () => {


    let {data, error, loadingMessage} = useFetch("http://localhost:8000/films")

    return ( 
        <div className="Info">
            <div className="InfoPlace">
                <h3>Your favourite films:</h3>
                {loadingMessage && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data && data.map((datab) => (
                    <div className="InfoPlaceFavouriteFilms" key={datab.id}>
                        <Link className="InfoPlaceFavouriteFilmsA" to={`/data/${datab.id}`}>
                            <p>{datab.title}</p>
                        </Link> 
                    </div>
                ))}
            </div>

            <div className="InfoPlace">
            <a className="InfoPlaceA" target="_blank" rel="noreferrer" href="https://www.ghibli.jp" > Official web </a>
                <img src={img1} alt="Studio Ghibli" />
            </div>
            
            <div className="InfoPlace">
                
                <h3>O stodiu Ghibli:</h3>
                <p>Studio Ghibli (japonsky 株式会社スタジオジブリ, Kabušiki gaiša Sutadžio Džiburi) je japonské animátorské filmové studio a pobočka vydavatelství Tokuma Šoten. Jejich anime filmy jsou celosvětově úspěšné a sklízejí ohlas u kritiky i publika – řada z nich se řadí k nejsledovanějším anime filmům známým mimo Japonsko.</p>
            </div>
        </div>
     );
}

export default Info;