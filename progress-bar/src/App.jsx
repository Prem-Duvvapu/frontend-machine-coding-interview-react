import { useEffect, useState } from 'react';
import './style.css';

const ProgressBar = ({ progress }) => {
  const [ animatedProgress, setAnimatedProgress ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    },100);
  }, [progress]);

  return (
    <div className="outer">
        <div 
          style={{ 
            // width: `${animatedProgress}%`, //this will repaint css on page again and again
            transform: `translateX(${animatedProgress - 100}%)`, //this will translate. (optimized)
            color: animatedProgress<5 ? "black" : "white" 
          }} 
          className="inner"
          role="progressbar"
          aria-valuenow={animatedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progress}%
        </div>
      </div>
  );
}

function App() {

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <ProgressBar progress={80} />
    </div>
  )
}

export default App;
