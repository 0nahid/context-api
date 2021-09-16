import React, { useContext } from 'react';
import { CategoryContext } from './../../App';
const Catagories = () => {
    const category = useContext(CategoryContext)

    return (
        <div>
            <h4>Select Catagories style {category}</h4>
            <h6>Selected Catagories {category}</h6>
        </div>
    );
};

export default Catagories;