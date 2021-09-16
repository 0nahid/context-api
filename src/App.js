import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import Catagories from './components/Catagories/Catagories';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <Header />
      <Home />
      <Shipment />
      <Catagories />
    </CategoryContext.Provider>
  );
}

export default App;
