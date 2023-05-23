//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { httpMovie } from '../../util/config';

const initialState = {
    arrFilm: []
}

const quanLyPhimReducer = createSlice({
  name: 'quanLyPhimReducer',
  initialState,
  reducers: {
    //-----------đây là action creater (action thường)------------
    getAllFilmAction : (state,action) => {
        state.arrFilm = action.payload;
    }
  }
});

export const {getAllFilmAction} = quanLyPhimReducer.actions

export default quanLyPhimReducer.reducer

//-------- get api phim action async (action thunk) ---------
export const getAllFilmApi = ()=>{
  // Hàm này sẽ chạy sau khi dispatch
    return async (dispatch) => {
        //Gọi api và dùng action getAllFilmAction đưa store
        const res = await httpMovie.get(`/api/quanlyphim/laydanhsachphim?maNhom=GP05`);
        //Tạo action đưa lên redux
        const action = getAllFilmAction(res.data.content);
        dispatch(action);
    }
}