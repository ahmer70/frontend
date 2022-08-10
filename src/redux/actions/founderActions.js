import api from '../../utils/api';
import { founder_Constants } from '../constant';
const { FReq, FErr, FSuc, FClr, FAddAtt, FDelAtt, FUptAtt } = founder_Constants

export const clearLabel = () => async (dispatch) => dispatch({ type: FClr });
export const registerfounder = (data) => async (dispatch) => {
    try {
        let res = await api.put('/founder/register', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {

            dispatch({ type: FAddAtt, payload: res.data.founder })
        } else {
            console.log("already")
        }
    } catch (error) {
        console.log("can not do")
    }
}

export const setAuth = (data) => async (dispatch) => {
    console.log("getting bro")

    dispatch({ type: FReq });
    try {
        let res = await api.get('/records/auth/twitch', data)
        if (res.data) {
            dispatch({ type: FSuc, payload: res.data.User })
        } else {
            dispatch({ type: FErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}

export const getAll = (data) => async (dispatch) => {


    dispatch({ type: FReq });
    try {
        let res = await api.get('/founder/getAll', { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {
            dispatch({ type: FSuc, payload: res.data.founder })
        } else {
            dispatch({ type: FErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}

export const updateFounder = (data) => async (dispatch) => {
    dispatch({ type: FReq });
    try {
        let res = await api.post('/founder/update', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data.founder && !res.data.error) {
            // dispatch(
            //   ModalProcess({ title: "Label", text: "Label has been removed." })
            // );
            dispatch({ type: FUptAtt, payload: res.data.founder });
        } else {
            dispatch({ type: FErr })
        }

        dispatch(clearLabel());
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}

export const removeFounder = (_id) => async (dispatch) => {
    dispatch({ type: FReq });
    try {
        let res = await api.delete(`/founder/delete`, { params: _id, headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data.success && !res.data.error) {
            // dispatch(
            //   ModalProcess({ title: "Label", text: "Label has been removed." })
            // );
            dispatch({ type: FDelAtt, payload: { _id } });
        } else {
            dispatch({ type: FErr })
        }

        dispatch(clearLabel());
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}



