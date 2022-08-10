import api from '../../utils/api';
import { usersConstants } from '../constant';
const { UReq, UErr, USuc, UCReq, UCErr, UCSuc, UClr, UAddAtt, UDelAtt, UUptAtt } = usersConstants

export const clearLabel = () => async (dispatch) => dispatch({ type: UClr });
export const registerqulification = (data) => async (dispatch) => {
    try {
        let res = await api.put('/users/add', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {

            dispatch({ type: UAddAtt, payload: res.data })
        } else {
            console.log("already")
        }
    } catch (error) {
        console.log("can not do")
    }
}

export const setAuth = (data) => async (dispatch) => {
    console.log("getting bro")

    dispatch({ type: UReq });
    try {
        let res = await api.get('/records/auth/twitch', data)
        if (res.data) {
            dispatch({ type: USuc, payload: res.data.User })
        } else {
            dispatch({ type: UErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}

export const getAll = (data) => async (dispatch) => {


    dispatch({ type: UReq });
    try {
        let res = await api.get('/users/getAllUsers', { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {
            dispatch({ type: USuc, payload: res.data.user })
        } else {
            dispatch({ type: UErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}


export const getAllCount = (data) => async (dispatch) => {


    dispatch({ type: UCReq });
    try {
        let res = await api.get('/users/getAllCount', { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {
            dispatch({ type: UCSuc, payload: res.data })
        } else {
            dispatch({ type: UCErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}
export const updateUser = (data) => async (dispatch) => {
    dispatch({ type: UReq });
    try {
        let res = await api.post('/users/update_user', { data, headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data.User && !res.data.error) {
            // dispatch(
            //   ModalProcess({ title: "Label", text: "Label has been removed." })
            // );
            dispatch({ type: UUptAtt, payload: res.data.user });
        } else {
            dispatch({ type: UErr })
        }

        dispatch(clearLabel());
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}

export const removeUser = (_id) => async (dispatch) => {
    dispatch({ type: UReq });
    try {
        let res = await api.delete(`/User/delete/${_id}`)
        if (res.data.success && !res.data.error) {
            // dispatch(
            //   ModalProcess({ title: "Label", text: "Label has been removed." })
            // );
            dispatch({ type: UDelAtt, payload: { _id } });
        } else {
            dispatch({ type: UErr })
        }

        dispatch(clearLabel());
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}



export const updateUserToken = (data) => async (dispatch) => {
    dispatch({ type: UReq });
    try {
        let res = await api.post('/twitch_auth/update_token', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data && !res.data.error) {
            console.log("goot ot", res.data)
            dispatch({ type: UUptAtt, payload: res.data });
        } else {
            dispatch({ type: UErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}