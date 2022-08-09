import api from '../../utils/api';
import { monogapi } from '../../utils/api';
import { t_authConstants } from '../constant';
import axios from 'axios'
const { TAReq, TAErr, TASuc, TAUptAtt, TAClr, TAAddAtt, TADelAtt, TFAddAtt, TFASuc } = t_authConstants
// const { TUReq, TUErr, TUSuc, TUClr, TUAddAtt, TUDelAtt, TUUptAtt } = tusers_authConstants
const TWITCH_CLIENT_ID = 'r2lqrhnsaxifh408n5ra0u1b4jvwy1';

export const clearLabel = () => async (dispatch) => dispatch({ type: TAClr });
export const connectTwitch = (data) => async (dispatch) => {

    try {
        let res = await api.post('/twitch_auth/update_token', data, { headers: { 'authorization': `${localStorage.getItem('token')}` } })

        if (res.data) {
            console.log("doen bro", res.data)
            if (res.data.find_f) {
                dispatch(addToMongo(res.data.find_f))
            }
            // dispatch({type:TAAddAtt,payload:res.data})
        } else {
            console.log("already")
        }
    } catch (error) {
        console.log("can not do")
    }
}



export const addToMongo = (data) => async (dispatch) => {

    try {
        let res = await monogapi.post('/add_twitch_data', { data })
        // console.log("mongodb bro", res)

        // if (res.data) {
        //     //  dispatch({type:TASuc,payload:res.data.data})
        // } else {
        //     console.log("already")
        // }
    } catch (error) {
        console.log("Mongo Api not working")
    }
}


export const getUserFollowed = (date) => async (dispatch) => {

    dispatch({ type: TAReq, payload: [] });
    try {
        let res = await api.get('/twitch_auth/getFollowed', { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (res.data) {
            let foll = res.data.find
            if (foll.length > 0) {
                dispatch(addToMongo(foll))
                dispatch(getVods(foll, res.data.token, date))





            }
            console.log("User Data", res.data)
        } else {
            dispatch({ type: TAErr })
        }
    } catch (error) {
        dispatch(window.location.href = '/connect')
        console.log("Twitch api for get  getFollowed not working", { isErr: true })
    }
}


export const getVods = (data, token, date) => async (dispatch) => {
    // dispatch({ type: TAReq, });
    try {

        let i = 0;
        await data.map(async (e) => {
            let res = await monogapi.get('/twitch_vods', { params: { username: e.to_login, id: e.to_id, date: date } })
            if (res.data) {

                if (res.data.data.length > 0) {
                    i = i
                    dispatch({ type: TASuc })
                    dispatch({ type: TFAddAtt, payload: res.data.data })

                } else {
                    i = i + 1
                }
                // else if(res.data.id){
                //     async function again(cursor) {

                //         let pag = null;
                //         let follow = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${res.data.id}&type=all&first=5&after=${cursor ? cursor : ""}`, {
                //             // let follow=await axios.get(`https://api.twitch.tv/helix/videos?user_id=${e.to_id}&type=all`,{
                //             headers: {
                //                 'Client-ID': TWITCH_CLIENT_ID,
                //                 'Accept': 'application/vnd.twitchtv.v5+json',
                //                 'Authorization': 'Bearer ' + token,

                //             }
                //         })
                //         // console.log("sad",follow.data.data)
                //         // data3.push(follow.data.data)
                //         let myda = follow.data.data
                //         console.log("myda",myda)
                //         dispatch({ type: TFAddAtt, payload: myda })

                //         pag = follow.data.pagination.cursor
                //         //  if(pag){
                //         //     console.log("pag",pag)
                //         //     again(pag)
                //         //  }

                //     }

                //     again()

                //     dispatch({ type: TFAddAtt, payload: res.data.data })

                // }
                if (data.length === i) {
                    dispatch({ type: TAErr })
                }
                console.log("Data not exist in mongo for =>", res.data.user_name)
            } else {
                dispatch({ type: TAErr })
            }
        })

    } catch (error) {
        dispatch(window.location.href = '/connect')
        console.log("Api not working", { isErr: true })
    }
}

// export const getTwitchUsers = (foll, user) => async (dispatch) => {

//     dispatch({ type: TUReq });
//     try {
//         await foll.map(async (e) => {
//             let follow = await axios.get(`https://api.twitch.tv/helix/users?id=${e.to_id}`, {
//                 headers: {
//                     'Client-ID': TWITCH_CLIENT_ID,
//                     'Accept': 'application/vnd.twitchtv.v5+json',
//                     'Authorization': 'Bearer ' + user.token,
//                 }
//             })
//             if (follow.data.data) {
//                 let data = follow.data.data
//                 dispatch({ type: TUAddAtt, payload: data[0] })

//             } else {
//                 dispatch({ type: TUErr })
//             }

//         })


//     } catch (error) {
//         dispatch(window.location.href = '/connect')
//         console.log("can not do", { isErr: true })
//     }
// }
