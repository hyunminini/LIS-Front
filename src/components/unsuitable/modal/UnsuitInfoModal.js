import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import UnsuitList from "../sample/UnsuitList";
import '../../../styles/unsuitable/unsuitableUnsuitInfo.scss'


function ReasonPickerModal({prescribeCode, setModal, modal}) {

    const closeModal = () => {
        setModal(!modal)
    }

    return (
        <div className="unsuit-info">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 검체 정보 </h2>
                <div>
                    <button className="x-btn" onClick={closeModal}>X</button>
                </div>
            </div>
            <div className="unsuit-content">
                <UnsuitList prescribeCode={prescribeCode} />
            </div>
            <div>
            </div>
        </div>
    );
}

export default ReasonPickerModal;
