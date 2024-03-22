import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Left from './left';
import Right, { Rating } from './Right';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [dataid, setdataid] = useState()
  const [length, setlength] = useState(0)
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState()
  const [hover, setHover] = useState(0)
  const [Rightshow, setRightshow] = useState(false)
 const [RatingShow, setRatingShow] = useState(false)
 const [dataRating, setDataRating] = useState([])
  return (
<>
<Navbar input={input} setInput={setInput} length={length} setlength={setlength}/>
<div className="leftorright">
<Left input={input} setInput={setInput} dataid={dataid} setdataid={setdataid} length={length} setlength={setlength}
loading={loading} setLoading={setLoading}
rating={rating} setRating={setRating}
hover={hover} setHover={setHover}
Rightshow={Rightshow} setRightshow={setRightshow}
setRatingShow={setRatingShow}
/>  
{Rightshow && <Right input={input} setInput={setInput} dataid={dataid} setdataid={setdataid}
loading={loading} setLoading={setLoading}
rating={rating} setRating={setRating}
hover={hover} setHover={setHover}
Rightshow={Rightshow} setRightshow={setRightshow}
setRatingShow={setRatingShow}
setDataRating={setDataRating}
dataRating={dataRating}
/>
}
{RatingShow && <Rating dataRating={dataRating} setDataRating={setDataRating} 
rating={rating} setRatingShow={setRatingShow}

/>}
</div>
</>


      )
}




 function Navbar({input,setInput,length,setlength}) {
  return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{backgroundColor:'#5a37d1'}}>
      <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         🍿 usepopcorn
        </IconButton>
        <input typeof='Search' placeholder='Search' onChange={e => setInput(e.target.value)} className='search'/>
        <p>Found Top {length} Result</p>
        {input === '' ? setlength(0) : null}
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default App
