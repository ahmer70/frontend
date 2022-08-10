import api from '../../utils/api';
import { users_res_Constants } from '../constant';
const { URReq, URErr, URSuc, URClr, URAddAtt, URDelAtt, URUptAtt } = users_res_Constants

export const clearLabel = () => async (dispatch) => dispatch({ type: URClr });
export const registerrespponse = (data) => async (dispatch) => {
    try {
        let res = await api.put('/response/register', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {

            dispatch({ type: URAddAtt, payload: res.data.response })
        } else {
            console.log("already")
        }
    } catch (error) {
        console.log("can not do")
    }
}


export const getAll = (data) => async (dispatch) => {


    dispatch({ type: URReq });
    try {
        let res = await api.get('/response/getAll', { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {
            dispatch({ type: URSuc, payload: res.data.response })
        } else {
            dispatch({ type: URErr })
        }
    } catch (error) {
        console.log("can not do", { isErr: true })
    }
}