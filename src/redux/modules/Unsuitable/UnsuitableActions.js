import Types from "../../ActionConstants";
import * as UnsuitableAPI from "../../../api/UnsuitableAPI"


const UnsuitableActions = {
    getSamples: (barcode, authority) => async (dispatch) => {
        dispatch( { type: Types.GET_SAMPLE} );

        try {
            const sample = await UnsuitableAPI.getSample(barcode, authority);

            dispatch({
                type: Types.GET_SAMPLE_SUCCESS,
                payload: sample.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getPrescribes: (prescribeCode, authority) => async (dispatch) => {
        dispatch ({ type: Types.GET_PRESCRIBE });

        try {
            const prescribe = await UnsuitableAPI.getPrescribe(prescribeCode, authority);

            dispatch({
                type: Types.GET_PRESCRIBE_SUCCESS,
                payload: prescribe.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_PRESCRIBE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getUsers: (userName) => async (dispatch) => {
        dispatch ({ type: Types.GET_USERS });

        try {
            const user = await UnsuitableAPI.getUser(userName);

            dispatch({
                type: Types.GET_USERS_SUCCESS,
                payload: user.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_USERS_FAILURE,
                payload: error.toString()
            })
        }
    },

    getOneUser: (pickUser) =>  async (dispatch) => {
        dispatch ({ type: Types.GET_USER});

        try{
            const getSelectUser = await pickUser;

            dispatch({
                type: Types.GET_USER_SUCCESS,
                payload: getSelectUser

            })
        } catch (error) {
            dispatch({
                type: Types.GET_USER_FAILURE,
                payload: error.toString()
            })
        }

    },

    getSample: (sampleDetail) => async (dispatch) => {
        dispatch ({type: Types.GET_UNSUITABLE_SAMPLE});
        
        try{
            const getUnsuitableSample = await sampleDetail;

            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_SUCCESS,
                payload: getUnsuitableSample
            })
        } catch (error) {
            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getUpdateSample: (updateSampleDetail) => async (dispatch) => {
        dispatch ({type: Types.GET_UNSUITABLE_SAMPLE});

        try{
            const getUnsuitableSample = await updateSampleDetail;

            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_SUCCESS,
                payload: getUnsuitableSample
            })
        } catch (error) {
            dispatch({
                type: Types.GET_UNSUITABLE_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },

    postUnsuitInfo:(unsuitableSampleList) => async(dispatch) => {
        dispatch({type: Types.POST_UNSUITABLE_SAMPLE});

        try{
            const postUnsuitSample = await UnsuitableAPI.insertUnsuitableSample(unsuitableSampleList);

            dispatch({
                type: Types.POST_UNSUITABLE_SAMPLE_SUCCESS,
                payload: postUnsuitSample.data
            })
        } catch (error) {
            dispatch({
                type:Types.POST_UNSUITABLE_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },

    getUnsuitableReason: () => async(dispatch) => {
        dispatch({type: Types.GET_UNSUITABLE_REASON});

        try{
            const getUnsuitableReasons = await UnsuitableAPI.getUnsuitableReason();

            dispatch({
                type: Types.GET_UNSUITABLE_REASON_SUCCESS,
                payload: getUnsuitableReasons.data
            })
        } catch (error) {
            dispatch({
                type:Types.GET_UNSUITABLE_REASON_FAILURE,
                payload: error.toString()
            })
        }
    },

    getOneSample: (prescribeCode) => async (dispatch) => {
        dispatch({type: Types.GET_SELECT_SAMPLE});

        try{
            const sample = await prescribeCode;

            dispatch({
                type: Types.GET_SELECT_SAMPLE_SUCCESS,
                payload: sample
            })
        } catch (error) {
            dispatch({
                type:Types.GET_SELECT_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    },
    getUnsuitInfos: (barcode) => async (dispatch) => {
        dispatch({type: Types.GET_UNSUIT_SAMPLE});

        try{
            const unsuit = await UnsuitableAPI.getUnsuitInfo(barcode);

            dispatch({
                type: Types.GET_UNSUIT_SAMPLE_SUCCESS,
                payload: unsuit.data
            })
        }  catch (error) {
            dispatch({
                type:Types.GET_SELECT_SAMPLE_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default UnsuitableActions;