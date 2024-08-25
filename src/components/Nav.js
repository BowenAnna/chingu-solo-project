import React, {useState, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Questions from './Questions';


const Nav=()=>{
const[data, setData]=useState([]);
const[loading, setLoading]=useState(true);
const[error, setError]=useState(null);

useEffect(()=>{
  fetch("https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json")
  .then(response =>{
    if(!response.ok){
      throw new Error("Network response wasn't ok")
    }
    return response.json();
  })
  .then(data => {
    setData(data);
    setLoading(false);
  })
  .catch(error => {
    setError(error);
    setLoading(false);
  });
}, []);

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>Error: {error.message}</div>;
}

  return (
    <div>
      <h1>Chingu Trivia</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
      </ul>
    <Routes>
      <Route path=""/>
      <Route path="/questions" element={<Questions/>}/>
    </Routes>
    </div>
  )
}
export default Nav;