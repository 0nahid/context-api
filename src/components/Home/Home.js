import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
const Home = () => {
    const [count, setCount] = useContext(CategoryContext)
    return (
        <div>
            This is home component <br />
            The number of items is {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Home;