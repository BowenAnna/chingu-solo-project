import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="main-home">
      <h1>Welcome to the Chingu Trivia</h1>
      <p>
        Navigate to{" "}
        <button>
          <Link to="/questions" style={{ color: "black" }}>
            "Questions"
          </Link>
        </button>{" "}
        to start the game
      </p>
    </div>
  );
}
