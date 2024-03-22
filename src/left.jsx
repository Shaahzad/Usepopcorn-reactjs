import { useEffect, useState } from "react"
import { Rating } from "./Right"







export default function Left({input,setInput,dataid,setdataid,length,setlength,loading,setLoading,
rating,setRating,hover,setHover,Rightshow,setRightshow,setRatingShow
}) {
 const [data,setData] = useState([])
    useEffect(()=>{
        getdata()
    },[input])

const getdata = async () => {
    setLoading(true)
    const res = await fetch(`http://www.omdbapi.com/?apikey=9db7e45c&s=${input}`)
    const data = await res.json()
    setLoading(false)
    setData(data.Search)
    console.log(data);
    setlength(data.Search.length)
   setRightshow(false)
}
 


    return(
        
        
        <div className="Left">
            {
                loading && (
                    <div className="loader">

                    </div>
                )
            }
            {data?.map((movie)=>{
                return(
                    <div className="movie" onClick={()=> setdataid(movie.imdbID) || setRightshow(true) || 
                    setRatingShow(false)
                    }
                     style={{cursor:'pointer',display:'flex',alignItems:'center',gap:'10px',marginTop:'10px',padding:'10px',borderBottom:'1px solid lightgray'}}>
                    <img src={movie.Poster} width={50} height={50} alt="" />
                    <div>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                    </div> 

                    </div>
                )
            })}
        </div>
    )
}