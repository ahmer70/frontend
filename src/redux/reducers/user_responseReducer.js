import { users_res_Constants } from '../constant';

const { URReq, URErr, URSuc, URClr, URAddAtt, URDelAtt, URUptAtt } = users_res_Constants
const iS = {
    isSuc: false, isErr: false, isL: false, list: []
};

export const UserResReducer = (state = iS, action) => {

    let listTemp = state.list;

    switch (action.type) {
        case URSuc: return { ...state, isErr: false, isSuc: true, isL: false, list: action.payload };
        case URReq: return { ...state, isErr: false, isSuc: false, isL: true };
        case URErr: return { ...state, isErr: true, isSuc: false, isL: false };
        case URClr: return { ...state, isErr: false, isSuc: false, isL: false };
        case URDelAtt:
            if (listTemp && listTemp.length > 0) {
                listTemp = listTemp.filter(i => Number(i._id) !== Number(action.payload._id));
            }

            return {
                ...state, list: listTemp, isL: false
            };

        case URUptAtt:
            if (listTemp && listTemp.length > 0)
                listTemp = listTemp.map(i => {
                    if (Number(i._id) === Number(action.payload._id)) i = action.payload;
                    return i;
                });

            return {
                ...state, list: listTemp, isL: false
            };


        case URAddAtt:
            if (listTemp && listTemp.length > 0)
                listTemp = listTemp.concat([action.payload]);
            else if (listTemp) {
                listTemp = [].concat([action.payload]);
            }

            return {
                ...state, list: listTemp, isL: false
            };

        default: return state;
    }
}
