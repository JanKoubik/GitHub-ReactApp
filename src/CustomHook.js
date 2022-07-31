import { useEffect, useState } from "react";

const useFetch = (url) => {

    let [data, setData] = useState(null) 
    let [loadingMessage, setLoadingMessage] = useState(true) 
    let [error, setError] = useState(null) 

    useEffect(() => {

        setTimeout(() => {

            fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw Error("Někde se stala chyba.")
                }
               return res.json()
            })
            .then((res) => {
                setData(res)
                setError(null)
                setLoadingMessage(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoadingMessage(false)
            })

        },500)

    },[url])


    return {data, error, loadingMessage}
}
 
export default useFetch;