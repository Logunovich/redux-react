import { useDispatch, useSelector } from 'react-redux';
import './App.css';



function App() {

  const cash = useSelector(state => state.cash);
  const dispatch = useDispatch();
  
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
        <h1>Hello {cash}</h1>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
    </div>
  );
}

export default App;
