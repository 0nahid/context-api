import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetails from './../categoriesDetails/CategoriesDetails';
const allProducts = [
    { name: 'Lenevo', category: 'laptop' }, { name: 'ASUS', category: 'laptop' }, { name: 'HP', category: 'laptop' },
    { name: 'Nahid', category: 'laptop' }, { name: 'Hassan', category: 'laptop' }, { name: 'Apple', category: 'laptop' },
    { name: 'AMD', category: 'laptop' }, { name: 'Mac', category: 'laptop' }, { name: 'Toshiba', category: 'laptop' },
    { name: 'Iphone', category: 'mobile' }, { name: 'Miui', category: 'mobile' }, { name: 'Xiaomi', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikon', category: 'camera' }, { name: 'Akon', category: 'camera' },
]
const Catagories = (props) => {
    const { count } = props;
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // console.log({ category });
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h4>Select Your category {category}  </h4>
            {
                products.map(pd => <CategoriesDetails count={count} product={pd}> </CategoriesDetails>)
            }
        </div >
    );
};

export default Catagories;