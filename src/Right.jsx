import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import {FaStar} from 'react-icons/fa'




export default function Right({input,setInput,dataid,setdataid,loading,setLoading,rating,setRating,
hover,setHover,Rightshow,setRightshow,setRatingShow,setDataRating,dataRating
}) {
    const [data, setData] = useState([])

 useEffect(()=>{
    getdatabyid()
 },[dataid])
 
    const getdatabyid = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=9db7e45c&i=${dataid}`)
        const data = await response.json()
        setData(data)
        setHover(0)
        setRating()
        setRightshow(true)
        setDataRating(c => [...c, data])
        console.log(data);
    }


    return(
        <div className="Right">
  <div style={{display:'flex', alignItems:'center',gap:'20px',backgroundColor:'#293234'}}>
            <img src={data.Poster} width={150} height={180} alt="" style={{borderTopLeftRadius:'20px'}} />
            <div style={{lineHeight:'1.5'}}>
                <h5 className="title">{data.Title}</h5>
                <p>{data.Released}  {data.Runtime}</p>
                <p>{data.Genre}</p>
                <p>⭐ {data.imdbRating} imdbRating</p>
            </div>
            </div>
           <Star rating={rating} setRating={setRating} hover={hover} setHover={setHover}
           setRatingShow={setRatingShow} setRightshow={setRightshow} dataRating={dataRating}
           />

           <p style={{padding:'0px 20px',textAlign:'justify'}}>{data?.Plot}</p>
        </div>
    )
}

export  function Star({rating,setRating,hover,setHover,setRatingShow,setRightshow,dataRating}) {
    return(
        <div style={{display:'flex',gap:'5px',margin:'10px',alignItems:'center',
        backgroundColor:'#293234',justifyContent:'space-between', padding:'10px',flexWrap:'wrap'
        }}>         


            {[...Array(10)].map((star,i)=>{
                const ratingValue = i + 1
                return(
                    <>
                    <FaStar 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(ratingValue)}
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    />
                    
                </>
                )
            })}
            <ButtonAddToList rating={rating} setRatingShow={setRatingShow}  setRightshow={setRightshow}
            dataRating={dataRating} 
            />
        </div>
    )
}

export function Rating({dataRating, setDataRating,rating,setRatingShow}) {
    var length = dataRating.length

    function Remove(i){
      setDataRating(c => c.filter((_,index)=> {
        console.log(index,i);
        return index !== i
      }))  
    }
    
    return(
            <div className="Right">
       <p style={{textAlign:'center',fontWeight:'bold',backgroundColor:'#293234'}}>movies Watch #️⃣ {length}</p>
          {
    
    dataRating.map((data,i) => {
        return(
            <>
            <div style={{backgroundColor:'#293234'}} key={i}>
<div style={{display:'flex',alignItems:'center',gap:'20px'}}>
    <img src={data.Poster} alt="" width={100} height={100} />
    <h1>{data.Title}</h1>
</div>
<div style={{display:'flex',justifyContent:'center',gap:'20px',marginLeft:'50px',marginBottom:'10px'}}>
    <p>⭐{data.imdbRating}</p>
    <p>🌟{rating}</p>
    <p>⌛{data.Runtime}</p>
    <button onClick={()=>Remove(i)} className="cross" style={{padding:'0px 10px',borderRadius:'50px'}}>X</button>
</div>

            </div>
            </>

        )    
          }
    )
    }
            </div>
    )




}

export function ButtonAddToList({rating,setRatingShow,setRightshow}) {
    return(
        <>
        <button onClick={()=> setRightshow(false) || setRatingShow(true)}  style={{padding:'10px 20px',backgroundColor:'#6741d9',color:'white',borderRadius:'50px',
     border:'none',outline:'none',cursor:'pointer',width:'100px',
    }}>  Add  List </button>
    {rating}
        </>
    )
}


