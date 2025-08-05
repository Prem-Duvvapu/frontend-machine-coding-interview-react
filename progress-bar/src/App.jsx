import './style.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
        <div 
          style={{ 
            width: `${progress}%`, 
            color: progress<5 ? "black" : "white" 
          }} 
          className="inner"
          role="progressbar"
          aria-valuenow={progress}
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
