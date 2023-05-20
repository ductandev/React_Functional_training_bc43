import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFilmApi } from '../redux/reducers/quanLyPhimReducer';

export default function Movie() {
    //Lấy dữ liệu từ store redux về
    const {arrFilm}= useSelector(state => state.quanLyPhimReducer);
    const dispatch = useDispatch();


    console.log(arrFilm);
    const getProductApi = () => {
        const action = getAllFilmApi();
        dispatch(action);
    }

    useEffect(()=>{
        //Sau lần render đầu tiên thì useEffect sẽ chạy 
        //Gọi api = cách dispatch action async (action thunk)
        getProductApi();
    },[]);

    return (
        <div className='container'>
            <h3 className='text-center'>
                Danh sách phim
            </h3>
            <div className='row'>
                {arrFilm?.map((phim)=>{
                    return <div className='col-3 mt-2' key={phim.maPhim} >
                    <div className='card'>
                        <img src={phim.hinhAnh} alt="..." height={300}/>

                        <div className='card-body' style={{height:225}}>
                            <h3 style={{height:75}}>{phim.tenPhim}</h3>
                            <p style={{height:150}}>{phim.moTa.length > 150 ? phim.moTa.substr(0,150) +' ...' : phim.moTa}</p>
                        </div>
                    </div>
                </div>
                })}
                
            </div>
        </div>
    )
}
