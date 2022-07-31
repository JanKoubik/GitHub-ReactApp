import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./CustomHook";

const DataFilter = () => {

    let {data, error, loadingMessage} = useFetch("https://ghibliapi.herokuapp.com/films")

    let [filterResult, setFilterResult] = useState("")



    

    return ( 
        <div className="DataFilter">
            <div className="DataFilterColon">
                <div className="DataFilterColon-V0">
                    <p>Filter</p>
                </div>
                <div className="DataFilterColon-V0"> 
                        <input type="text" placeholder="Search..." onChange={event => setFilterResult(event.target.value)}></input>
                </div>
            </div>

            <div className="FetchPublicData"> 

            <h2>Studio Ghibli films</h2>
            {loadingMessage && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                data.filter((dataItems) => {
                    if (filterResult === "") {
                        return dataItems
                    }
                    else if (dataItems.title.toLowerCase().includes(filterResult.toLowerCase())) {
                        return dataItems
                    }
                }).map((dataItems) => (
                    <div className="useFetchFilms" key={dataItems.id}>
                        <Link to={`/data/${dataItems.id}`}>
                            <p>{dataItems.title}</p>
                        </Link>
                    </div>
                ))
            )}

            </div>

        </div>

     );
}

export default DataFilter;