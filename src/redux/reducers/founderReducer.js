import { founder_Constants } from '../constant';

const {FReq,FErr,FSuc,FClr,FAddAtt,FDelAtt,FUptAtt}=founder_Constants
const iS = {
    isSuc: false, isErr: false, isL: false, list: []
};

export const FounderReducer = (state = iS, action) => {

    let listTemp = state.list;

    switch (action.type) {
        case FSuc: return { ...state, isErr: false, isSuc: true, isL: false, list: action.payload };
        case FReq: return { ...state, isErr: false, isSuc: false, isL: true };
        case FErr: return { ...state, isErr: true, isSuc: false, isL: false };
        case FClr: return { ...state, isErr: false, isSuc: false, isL: false };
        case FDelAtt:
            if (listTemp && listTemp.length > 0) {
                listTemp = listTemp.filter(i => Number(i._id) !== Number(action.payload._id));
            }

            return {
                ...state, list: listTemp, isL: false
            };

        case FUptAtt:
            if (listTemp && listTemp.length > 0)
                listTemp = listTemp.map(i => {
                    if (Number(i._id) === Number(action.payload._id)) i = action.payload;
                    return i;
                });

            return {
                ...state, list: listTemp, isL: false
            };


        case FAddAtt:
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
