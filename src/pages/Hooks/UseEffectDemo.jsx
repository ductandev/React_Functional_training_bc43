//rafce
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseEffectDemo = (props) => {
    const [number, setNumber] = useState(0);
    const [arrProduct, setArrayProduct] = useState([]);
    const [productDetail, setProductDetail] = useState({     // Do content của api trả về object nên để là object
        image: '123'                                        // --> onError dòng 85
    });
    // useEffect(()=>{
    //     //UseEffect :
    //     /*
    //         chạy sau khi component render (didmount)
    //         chạy sau mỗi lần updating (state hoặc props thay đổi) (didupdate)
    //     */
    //     console.log('useEffect run');
    // });

    //=====================================================================
    useEffect(() => {
        //Chạy như lifecycle componentDidmount (Dùng để call các api không có tham số) --> chỉ gọi hàm 1 lần sau render
        console.log('useeffect didmount run');
        // Gọi api lấy list product về
        getAllProduct();

    },[]);

    //=====================================================================
    useEffect(() => {
        /*
            Tương tự componentDidUpdate thường dùng để setState có tham số  --> hàm được gọi lại mỗi lần khi state và props thay đổi
        */
        //Mỗi lần number thay đổi thì hàm này sẽ tự kích hoạt
        if (number !== 0) {
            getProductDetail(number);
        }
    }, [number]);

    //=====================================================================
    useEffect(()=>{
      const timeout=  setInterval(() => {
            console.log(1)
        }, 1000);
        return () => {
            //Hàm này sẽ chạy khi component mất khỏi DOM (Mất khỏi giao diện hiện tại)--> tương tự componentWillUnmount
            clearInterval(timeout);
        }
    },[]);

    //=====================================================================
    const getProductDetail = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ api về đưa vào state arrProduct
        setProductDetail(result.data.content)
    }

    //=====================================================================
    console.log('arrProduct', arrProduct);
    const getAllProduct = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ api về đưa vào state arrProduct
        setArrayProduct(result.data.content)
    }

    //=====================================================================
    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <hr />
            <h3>Product detail</h3>
            <img className="w-25" src={productDetail.image} alt="..." onError={(e) => {
                e.currentTarget.onerror = null; // prevents looping
                e.currentTarget.src = "https://picsum.photos/200/200";
            }} />

            <button className='btn btn-dark mx-2' onClick={()=>{
                setNumber(number+1);
            }}> Prev </button>
            <button className='btn btn-dark mx-2' onClick={()=>{
                setNumber(number-1);
            }}> Next </button>
            <hr />
            <h3>Product list</h3>
            <div className="row">
                {arrProduct.map((item) => {
                    return <div className='col-3' key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                <p>{item.price} $</p>
                                <button className="btn btn-dark" onClick={()=>{
                                    // cách 1:
                                    setNumber(item.id);
                                    // Cách 2:
                                    // getProductDetail(item.id)
                                }}>
                                    View detail
                                </button>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default UseEffectDemo