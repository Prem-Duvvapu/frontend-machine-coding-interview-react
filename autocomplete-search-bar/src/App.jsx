import { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }

    console.log("Api called ", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input)
    const json = await data.json();

    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }))
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    
    //cleanup function
    // This cleanup code runs:
    // 1. Before the effect runs next time (if dependencies changed)
    // 2. When the component unmounts
    return () => {
      clearTimeout(timer);
    }
  },[input]);

  return (
    <div className="App">
      <h1>Autocomplete search bar</h1>

      <div>
        <input
          type="text" 
          className="search-input"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />

        {showResults &&
          <div className="results-container">
            {
              results.map((r) => (
                <span key={r.id} className="result">
                  {r.name}
                </span>
              ))
            }
          </div>
        }
      </div>

    </div>
  );
}

export default App;