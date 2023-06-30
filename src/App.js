import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setResults] =useState([])
  
  const fetchImages= ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=svgDJ31fAfJuPdOSYysALNsPucDYNmkjV6BVLVJAHS8&query=${value}&orientation=landscape `)
  .then(res=>res.json())
  .then(data=>{
    // console.log(data)
    setResults(data.results)
  })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span id="gg">GeekGallery</span>
        <input style={{width:"60%"}} type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button id="btn" onClick={()=>fetchImages()}>Go</button>

      </div>
      <div className='gallery'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular} />
          })
        }

      </div>
    </div>
  );
}

export default App;