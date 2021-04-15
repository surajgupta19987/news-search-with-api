import React, { useEffect, useState } from 'react'

const App=()=>{
  const[News,setNews]=useState([])
  const[SearchQuery,setSearchQuery]=useState('react')
  const fetchNews=()=>{
    fetch(`https://hn.algolia.com/api/v1/search?query=${SearchQuery}`)
    .then(result=>result.json())
    .then(data=>setNews(data.hits))
    .catch(error=>console.log(error))
  };
  useEffect(()=>{
    fetchNews();
  });
  const handlechange = (e) =>{
    setSearchQuery(e.target.value)
  };
  return(
    <div>
      <h2>News</h2>
      <form>
        <input type="text"value={SearchQuery}onChange={handlechange}></input>
      </form>
      {News.map((n,i)=>(
      <p key={i}>{n.title}</p>))}
    </div>
  )};
  

export default App;
