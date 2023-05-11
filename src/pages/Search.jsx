import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';

const Search = () => {
    const keywordRef = useRef('');

    const [arrProduct, setArrayProduct] = useState([]);

    const [keyword, setKeyword] = useSearchParams();

    useEffect(()=>{
        //Lấy ra keyword => khác rổng thì mới gọi api
        const kWord = keyword.get('k');
        if(kWord!=='') {
            getProductByKeyword(kWord);
        }


    },[keyword.get('k')]) //keyword trên url thay đổi thì useeffect này sẽ chạy

    const getProductByKeyword = async (keyword) =>{
        const result = await axios({
            url:`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method:'GET'
        });

        setArrayProduct(result.data.content);
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        keywordRef.current = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //đưa keyword lên param
        setKeyword({
            k : keywordRef.current
        });
     
    }

    return (
        <div className='container'>
            <h3>Tìm kiếm sản phẩm</h3>
            <form className='form-group' onSubmit={handleSubmit }>
                <input id="keyword" className='form-control' onInput={handleChange} />

                <button className='btn btn-dark'>Search</button>
            </form>
            <h3>Kết quả tìm thấy ({arrProduct.length})</h3>
            <div className='row'>
                {arrProduct.map((item, index) => {
                    return <div className='col-4 mt-2' key={index}>
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <NavLink className={"btn btn-dark"} to={`/detail/${item.id}`}>
                                    View detail
                                </NavLink>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Search