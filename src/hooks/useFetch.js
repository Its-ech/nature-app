import { useState,useEffect } from "react";

export const useFetch = (url, method = 'GET') => {
    const [data ,setData]= useState(null)
    const [isLoading, setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const [options,setOptions]=useState(null)

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headeers: {
                "Content-type":"application/jeson"
            },
            body: JSON.stringify(postData)
        })
    }

useEffect(()=>{
    const fetchData = async ()=> {
        setIsLoading(true)

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(response.statusText)
        }
        
        const json = await response.json()

        setIsLoading(false)

        setData(json)
        setError(null)
    } catch (error) {
        setIsLoading(false)
        setError(error.massage)
      }
    }
    fetchData()  
}, [url])

 return{data, isLoading, error, postData}

}