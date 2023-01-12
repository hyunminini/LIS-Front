import axios from "axios";
import { GATEWAY_URL } from '../utils/constants/Config';

export const getSample = (barcode, authority) => {
    return axios.get(`${GATEWAY_URL}/data-service/sample/search?barcode=${barcode}&authority=${authority}`)
}

export const getPrescribe = (barcode, authority) => {
    return axios.get(`${GATEWAY_URL}/data-service/prescribe/search?barcode=${barcode}&authority=${authority}`)
}

export const getUser = (userName) => {
    return axios.get(`${GATEWAY_URL}/data-service/user/search/${userName}`)
}

export const getUnsuitableReason = () => {
    return axios.get(`${GATEWAY_URL}/data-service/unsuitable-reason/`)
}

export const insertUnsuitableSample = (unsuitableSampleList) => {
    return axios.post(`${GATEWAY_URL}/collecting-service/unsuitable-reason-management/`, (unsuitableSampleList), {
        headers: {'Content-Type': `application/json`}
    })
     
}
export const getReasonCode = (reasonCode) => {
    return axios.get(`${GATEWAY_URL}/data-service/reason/search/${reasonCode}`)
}

export const getUnsuitInfo = (barcode) => {
    return axios.get(`${GATEWAY_URL}/data-service/unsuitable/${barcode}`)
}
