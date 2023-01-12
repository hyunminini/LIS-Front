import * as CollectingApi from "../../../api/CollectingApi";
import Types from "../../ActionConstants";

const VisitActions = {
    getVisitData: (patientNo) => async (dispatch) => {
        try {
            const result = await CollectingApi.findPatientVisitInfo(patientNo);

            if (!result) throw new Error("can not read visit");

            dispatch({
                type: Types.GET_VISIT_INFO,
                payload: result.data
            })
        } catch (error) {
        }
    }
}

export default VisitActions;