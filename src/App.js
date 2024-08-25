import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questions from './components/Questions';
import Home from './components/Home'; // Assuming you have a Home component
import Footer from './components/Footer';
import Nav from './components/Nav';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    
    <Router>
      <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions data={data} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
