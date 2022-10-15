import React, { useEffect, useState } from 'react'
import API_KEY,{CONTEXT_KEY} from '../keys'
//For creating your own keys visit these websites
//https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
//https://cse.google.com/cse/create/new

const useGoogleSearch = (term) => {
  const [data,setData]=useState(null)
  useEffect(()=>{
const fetchData=async()=>{
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
    .then(res=> res.json())
    .then(result=>{
        setData(result)
    })
}
fetchData()
  },[term])
  return {data};
}

export default useGoogleSearch