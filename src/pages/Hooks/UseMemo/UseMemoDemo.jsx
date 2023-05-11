// rafce
import React, { useMemo, useState } from 'react'
import Cart from './Cart';

let cart = [
    { id: 1, name: 'iphone', price: 1000 },
    { id: 2, name: 'htc phone', price: 2000 },
    { id: 3, name: 'lg phone', price: 3000 }
];

const UseMemoDemo = () => {
    let [like, setLike] = useState(1);

    // const cartMemo = useMemo(() => cart, []);
    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>♥</span>
            <br />
            <br />
            <Cart cart={cart} />
        </div>
    )
}

export default UseMemoDemo