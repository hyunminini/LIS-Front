import axios from 'axios';
import {GATEWAY_URL} from "../utils/constants/Config";

export const unregistered = (render) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/unregistered/search?render=${render}`)
}

export const getSearchRegister = (barcode, stDate, endDate) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/register/search?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const getUnsuitableStatus = () =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/UnsuitableStatus`)
}

export const getSearchInspectionType = (orderCode) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/inspection-type/search?orderCode=${orderCode}`)
}

export const getSearchConclusion = (barcode) =>{
    return axios.get(`${GATEWAY_URL}/data-service/inspection-service/conclusion/search?barcode=${barcode}&`)
}

export const insertConclusionResult = (conclusion) =>{
    return axios.post(`${GATEWAY_URL}/inspection-service/conclusion`, conclusion)
}

export const updateConclusion = (conclusion) =>{
    return axios.put(`${GATEWAY_URL}/inspection-service/conclusion`, conclusion)
}