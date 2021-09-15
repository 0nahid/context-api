import React from 'react';
import { useState } from 'react';
const Catagories = (props) => {
    const { count, setCount } = props;
    return (
        <div>
            <h4>Select your Catagories style {count}</h4>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Catagories;