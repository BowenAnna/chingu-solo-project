import React from 'react';
import {Link} from "react-router-dom";



const Nav=()=>{
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
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/questions" element={<Questions data={data}/>}/>
    </Routes> */}
    </div>
  )
}
export default Nav;