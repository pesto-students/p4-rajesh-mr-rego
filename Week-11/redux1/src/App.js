import { useState } from 'react';
import './App.css';

function App() {
  const [isLit, setLit] = useState(true);

  return (
    <div className={"App " + (isLit ? "Lit" : "Dark")} >
      <h1>The room is now {isLit ? "lit" : "dark"}.</h1>
      <button onClick={() => setLit(!isLit)}>Flip</button>
    </div >
  );
}

export default App;
