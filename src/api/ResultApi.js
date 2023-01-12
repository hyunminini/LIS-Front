import axios from 'axios';
import { API_URL } from '../utils/constants/Config';

export const getAllResult = () => {
    return axios.get(`${API_URL}/result/all`); // 전체 조회
};

export const getResults = (
    patientNo,
    startDate,
    endDate,
    radioDate,
    orderSelect,
) => {
    return axios.get(
        `${API_URL}/result/search?patientNo=${patientNo}&startDate=${startDate}&endDate=${endDate}&radioDate=${radioDate}&orderSelect=${orderSelect}`,
    ); // 날짜 조회
};

export const getSearchNoDate = (text) => {
    return axios.get(`${API_URL}/result/${text}`); // 환자번호 조회
};

export const postSendMessage = (to, content) => {
    return axios.post(`${API_URL}/sendSms/post`, {
        to: to,
        content: content,
    });
};

export const getSmsData = () => {
    return axios.get(`${API_URL}/smsData/all`);
};

export const postSmsData = (smsTitle, smsContent) => {
    return axios.post(`${API_URL}/smsData/add`, {
        smsTitle: smsTitle,
        smsContent: smsContent,
    });
};

export const deleteSmsData = (smsNo) => {
    return axios.delete(`${API_URL}/smsData/${smsNo}`);
};

export const editSmsData = (smsNo, smsTitle, smsContent) => {
    return axios.put(`${API_URL}/smsData/${smsNo}`, {
        smsNo: smsNo,
        smsTitle: smsTitle,
        smsContent: smsContent,
    });
};
