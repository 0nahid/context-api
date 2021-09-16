import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import Catagories from './components/Categories/Categories';
import CategoriesDetails from './components/categoriesDetails/CategoriesDetails';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('Laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header />
      <Home />
      <Shipment />
      <Catagories />
      <CategoriesDetails />
    </CategoryContext.Provider>
  );
}

export default App;
