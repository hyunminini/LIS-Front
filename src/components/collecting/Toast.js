import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const ToastError = (text) => {
    toast.error(text,{
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true});
}