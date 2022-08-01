import img1 from "./images/logo-ghibli.png";

const Info = () => {


    return ( 
        <div className="Info">
            <div className="InfoPlace">
            <a target="_blank" rel="noreferrer" href="https://www.ghibli.jp" > Official web </a>
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