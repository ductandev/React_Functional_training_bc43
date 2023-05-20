// rafce
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
const Detail = () => {

    const [productDetail,setProductDetail] = useState({})
    //Lấy tham số trên url
    const params = useParams();
    
    useEffect(() => {
        //Call api lúc trang vừa load
        getProductDetailApi(params.id);
    },[params.id]);

    const getProductDetailApi = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method:'GET'
        });
        //Đưa dữ liệu lấy từ api về vào state
        setProductDetail(result.data.content);
    }

  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className="col-4">
                <img className='w-100' src={productDetail.image} alt="..." />
            </div>
            <div className='col-8'>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
            </div>
        </div>

        <h3>Relate products</h3>
        <div className='row'>
            {productDetail.relatedProducts?.map((prod,index)=>{             // ?: optional trainning
                return  <div className='col-4' key={index}>
                    <div className="card">
                        <img src={prod.image} alt="" />
                        <div className="card-body">
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <NavLink className={"btn btn-dark"} to={`/detail/${prod.id}`}>
                                <i className="fa fa-eye"></i>
                                View Detail
                            </NavLink>
                        </div>
                    </div>
                </div>
            })}
           

        </div>
    </div>
  )
}

export default Detail