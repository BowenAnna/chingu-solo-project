import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

export default function Nav() {
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

    </div>
  )
}
