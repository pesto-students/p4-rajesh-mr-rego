import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from './redux/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>You've walked {count} steps today!</p>
      <input id="addstepbutton" type="button" value="Add a Step" onClick={() => dispatch(increment())} />
      <input id="resetbutton" type="button" value="Reset Steps" onClick={() => dispatch(reset())} />
    </div>
  );
}

export default App;
