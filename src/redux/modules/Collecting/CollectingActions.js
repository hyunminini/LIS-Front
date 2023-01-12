import Types from "../../ActionConstants";
import * as CollectingApi from "../../../api/CollectingApi"

const CollectingActions = {
    putCollectingData: (prescribeCode) => async (dispatch) => {
        try {
            const result = await CollectingApi.newCollecting(prescribeCode);

            if (!result) throw new Error("can not read prescribeCode");

            dispatch({
                type: Types.PUT_COLLECTING_DATA,
                payload: result.data
            })
        }catch (error) {

        }

    },
    cancelCollecting: (prescribeCode) => async (dispatch) => {
        try {
            const result = await CollectingApi.cancelCollecting(prescribeCode);
            if (!result) throw new Error("can not read prescribeCode");
            dispatch({
                type: Types.CANCEL_COLLECTING,
                payload: result
            })
        }catch (error){

        }
    }
}

export default CollectingActions;