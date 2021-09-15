import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header count={count} setCount={setCount} />
      <Home />
      <Shipment />
    </div>
  );
}

export default App;
