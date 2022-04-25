import './App.css';
import Puzzle from "./puzzle/Puzzle";

function App() {
  return (
    <div className={'container'}>
        <div className={'sideText'}>
            <span>P</span><span>U</span><span>Z</span>
            <span>Z</span><span>L</span><span>E</span>
        </div>
        <Puzzle />
        <div className={'sideText'}>
            <span>P</span><span>U</span><span>Z</span>
            <span>Z</span><span>L</span><span>E</span>
        </div>
    </div>
  );
}

export default App;
