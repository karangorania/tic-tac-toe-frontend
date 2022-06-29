import './App.css';

import Game from './Components/Game';

const App = () => {
  return (
    <>
      <div className="App">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
        <Game />
      </div>
    </>
  );
};

export default App;
