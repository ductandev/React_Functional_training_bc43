//rafce

import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProfileActionApi } from '../redux/reducers/userReducer';
const Profile = (props) => {

  const { userProfile} = useSelector(state => state.userReducer)

  const dispatch = useDispatch();

  const getProfileApi = () => {
    //Gọi api getProfile sử dụng redux async action
    const action = getProfileActionApi();
    dispatch(action);
  }

  useEffect(() => {
    getProfileApi();
  },[])

  return (
    <div className='container'> 
      <h3>Hello ! {userProfile.email}</h3>
    </div>
  )
}

export default Profile