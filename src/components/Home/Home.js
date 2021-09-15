import React from 'react';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    return (
        <div>
            This is home component
            <Catagories count={count} setCount={setCount} />
        </div>
    );
};

export default Home;