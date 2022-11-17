import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { flip } from './redux/flipSlice';

function App() {
  const room = useSelector((state) => state.switch.isLit);
  const dispatch = useDispatch();

  const flipSwitch = () => {
    dispatch(flip());
  }

  return (
    <div className={"App " + (room ? "Lit" : "Dark")} >
      <h1>The room is now {room ? "lit" : "dark"}.</h1>
      <button onClick={flipSwitch}>Flip</button>
    </div >
  );
}

export default App;
