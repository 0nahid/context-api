import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Categories/Categories';
const Home = () => {
    const [count, setCount] = useContext(CategoryContext)
    return (
        <div>
            This is home component <br />
            The number of items is {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Catagories count={count} ></Catagories>
        </div>
    );
};

export default Home;