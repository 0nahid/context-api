import React from 'react';

const Header = (props) => {
    const { count, setCount } = props;
    return (
        <div>
            this is a header {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Header;