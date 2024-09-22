'use client'
import {useEffect} from "react";

export default function DeepLinking() {
  

    useEffect(() => {
        const params = window.location.search
        if (params.includes('linking')){
            console.log('PARAMS',params.split('?')[1])
            const url = getUrlSubstringAfterEquals(params)
            // const linking =params.split('=')
            // const path = linking[1]
            // const id = linking[2]
          
            // const url = `${path}=${id}`
            console.log(url)
            window.location.replace(url)
        }
      
    }, [])
    
  return  null
}


function getUrlSubstringAfterEquals(url: string): string {
    const equalsIndex = url.indexOf('=');
  
    if (equalsIndex !== -1) {
      return url.substring(equalsIndex + 1);
    }
  
    // Return an empty string if there's no '=' in the URL
    return '';
  }
