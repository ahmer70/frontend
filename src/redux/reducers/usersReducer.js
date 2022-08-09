import { usersConstants } from '../constant';

const {UReq,UErr,USuc,UClr,UAddAtt,UDelAtt,UUptAtt}=usersConstants
const iS = {
    isSuc: false, isErr: false, isL: false, list: []
};

export const UsersReducer = (state = iS, action) => {

    let listTemp = state.list;

    switch (action.type) {
        case USuc: return { ...state, isErr: false, isSuc: true, isL: false, list: action.payload };
        case UReq: return { ...state, isErr: false, isSuc: false, isL: true };
        case UErr: return { ...state, isErr: true, isSuc: false, isL: false };
        case UClr: return { ...state, isErr: false, isSuc: false, isL: false };
        case UDelAtt:
            if (listTemp && listTemp.length > 0) {
                listTemp = listTemp.filter(i => Number(i._id) !== Number(action.payload._id));
            }

            return {
                ...state, list: listTemp, isL: false
            };

        case UUptAtt:
            if (listTemp && listTemp.length > 0)
                listTemp = listTemp.map(i => {
                    if (Number(i._id) === Number(action.payload._id)) i = action.payload;
                    return i;
                });

            return {
                ...state, list: listTemp, isL: false
            };


        case UAddAtt:
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
