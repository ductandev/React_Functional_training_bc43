//rxslice


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        { name: 'Huy Pro', content: 'Mình code giỏi quá' },
        { name: 'Huy Vip', content: 'Huy sẽ đánh sấp page cybersoft' },
    ],
    userComment: {
        name: 'abc',
        content: '123'
    }

}

const appChatReducer = createSlice({
    name: 'appChatReducer',
    initialState,
    reducers: {
        addCommentAction: (state, action) => {
            //Lấy dữ liệu action từ payload
            const userComment = { ...action.payload };

            state.arrComment.push(userComment);
        },
        updateUserComment: (state,action) => {
            //Lấy id và value từ action payload
            const {id,value} = action.payload;
            
            console.log(action);
            state.userComment[id] = value;
        }
    }
});

export const { addCommentAction,updateUserComment} = appChatReducer.actions

export default appChatReducer.reducer