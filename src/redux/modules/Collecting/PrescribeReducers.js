import Types from "../../ActionConstants";
import InitialData from "./InitialData";



const reducer = (state = InitialData, {type, payload}) => {

    switch (type) {
        case Types.GET_PRESCRIBE_INFO :
            const info = {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: payload
                }
            }
                return info;
        default:
            return state;
    }

}

export default reducer;