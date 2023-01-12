/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExportExcel from '../components/result/ExportExcel';
import ResultActions from '../redux/modules/Result/ResultActions';
import '../styles/resultCheck/result.scss';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SearchForm from '../components/result/SearchForm';
import ResultList from '../components/result/ResultList';
import ChartElement from '../components/result/ChartElement';
import ChartDataList from '../components/result/ChartDataList';
import ExportCSV from '../components/result/ExportCSV';
import DefaultData from '../components/result/DefaultData';
import ResultModal from '../components/result/ResultModal';
import Swal from 'sweetalert2';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
const ResultCheck = () => {
    const { resultInfo, smsDataInfo } = useSelector(
        (state) => state.ResultInfo,
    );
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [chartOpen, setChartOpen] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [selectSmsData, setSelectSmsData] = useState('');
    const [filterSearch, setFilterSearch] = useState('');
    const [resultItems, setResultItems] = useState([]);
    const [editDataNo, setEditDataNo] = useState('');
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editDataFilter, setEditDataFilter] = useState([]);
    const [smsAddTitle, setSmsAddTitle] = useState('');
    const [smsAddContent, setSmsAddContent] = useState('');

    const deleteData = (smsNo) => {
        Swal.fire({
            icon: 'warning',
            title: '삭제',
            text: `정말로 삭제 하시겠습니까??`,
            showCancelButton: true,
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(ResultActions.deleteSmsData(smsNo));
                setTimeout(() => {
                    dispatch(ResultActions.getSmsData());
                }, 300);

                // setModalOpen(false);
                setSelectSmsData('');
                setEditDataNo('');
                setSmsAddTitle('');
                setSmsAddContent('');
            }
        });
    };

    const addSubmit = (smsTitle, smsContent) => {
        smsTitle = smsAddTitle;
        smsContent = smsAddContent;

        Swal.fire({
            icon: 'question',
            title: '생성',
            text: `정말로 생성 하시겠습니까??`,
            showCancelButton: true,
            confirmButtonText: '생성',
            cancelButtonText: '취소',
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(ResultActions.postSmsData(smsTitle, smsContent));
                // setModalOpen(false);
                setTimeout(() => {
                    dispatch(ResultActions.getSmsData());
                }, 300);

                setAddModalOpen(false);
                setSmsAddTitle('');
                setSmsAddContent('');
            }
        });
    };

    const editSubmit = (smsNo, smsTitle, smsContent) => {
        smsNo = editDataFilter[0].smsNo;
        smsTitle = editTitle;
        smsContent = editContent;

        Swal.fire({
            icon: 'question',
            title: '수정',
            text: `정말로 수정 하시겠습니까??`,
            showCancelButton: true,
            confirmButtonText: '수정',
            cancelButtonText: '취소',
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(
                    ResultActions.editSmsData(smsNo, smsTitle, smsContent),
                );

                setTimeout(() => {
                    dispatch(ResultActions.getSmsData());
                    setSelectSmsData(smsContent);
                }, 300);

                setEditModalOpen(false);
            }
        });
    };

    const searchInspectionNameHandler = (e) => {
        e.preventDefault();
        setFilterSearch(e.target.value);
    };

    const scrollRef = useRef(scrollPosition);

    const updateScroll = () => {
        setScrollPosition(scrollRef.current.scrollTop);
    };

    const goToBottom = () => {
        scrollRef.current.scrollTo({ top: 9999, behavior: 'smooth' });
    };

    const goToTop = () => {
        scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleChart = () => {
        setChartOpen((chartOpen) => !chartOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectSmsData('');
        setEditDataNo('');
        setSmsAddTitle('');
        setSmsAddContent('');
        setAddModalOpen(false);
        setEditModalOpen(false);
    };

    const openModal = () => {
        if (resultInfo.data.length > 0) {
            setModalOpen(true);
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'warning',
                title: '환자번호 입력 후 시도해주세요.',
            });
        }
    };

    const onSubmit = async (
        query,
        target,
        startDate,
        endDate,
        radioDate,
        orderSelect,
    ) => {
        checkedItems.splice(0);
        if (startDate === '') {
            dispatch(ResultActions.getNoDateSearch(query));
        } else {
            endDate && startDate === ''
                ? dispatch(ResultActions.getNoDateSearch(query))
                : dispatch(
                      ResultActions.getDateSearch(
                          query,
                          target,
                          startDate,
                          endDate,
                          radioDate,
                          orderSelect,
                      ),
                  );
        }
    };

    useEffect(() => {
        scrollRef.current.addEventListener('scroll', updateScroll);
    });

    useEffect(() => {
        setResultItems(resultInfo.data);
    }, [resultInfo]);

    // useEffect(() => {
    //     console.log('Effect !!');
    //     resultInfo.data = [];
    // }, []);

    return (
        <div className='wrap'>
            <ResultModal
                open={modalOpen}
                close={closeModal}
                setModalOpen={setModalOpen}
                resultInfo={resultInfo}
                selectSmsData={selectSmsData}
                setSelectSmsData={setSelectSmsData}
                editDataNo={editDataNo}
                setEditDataNo={setEditDataNo}
                editModalOpen={editModalOpen}
                setEditModalOpen={setEditModalOpen}
                addModalOpen={addModalOpen}
                setAddModalOpen={setAddModalOpen}
                editSubmit={editSubmit}
                editDataFilter={editDataFilter}
                setEditDataFilter={setEditDataFilter}
                smsAddTitle={smsAddTitle}
                smsAddContent={smsAddContent}
                setSmsAddTitle={setSmsAddTitle}
                setSmsAddContent={setSmsAddContent}
                addSubmit={addSubmit}
                deleteData={deleteData}
                editTitle={editTitle}
                editContent={editContent}
                setEditTitle={setEditTitle}
                setEditContent={setEditContent}
            />
            <div className='max-wrap'>
                <div className='title-wrap'>
                    <ContentPasteSearchOutlinedIcon />
                    <h2>
                        검사결과 조회 <span>Inspection result inquiry</span>
                    </h2>
                </div>

                <SearchForm onSubmit={onSubmit} setDate={setDate} />

                <div className='result-wrap'>
                    <div className='con-title'>
                        <div className='result-con-wrap'>
                            <TextSnippetOutlinedIcon />
                            <p>검사결과</p>

                            <input
                                className='inspectionName-search'
                                onChange={searchInspectionNameHandler}
                                value={filterSearch}
                                placeholder='검사명을 입력해주세요.'
                            />
                        </div>

                        <div className='export-btn-wrap'>
                            <ExportCSV
                                csvData={
                                    resultInfo.data.length > 0
                                        ? resultInfo.data
                                        : []
                                }
                                filename={`resultInfo`}
                            />
                            <ExportExcel
                                csvData={
                                    resultInfo.data.length > 0
                                        ? resultInfo.data
                                        : []
                                }
                                fileName='Customers_Infomation_xlsx'
                            />
                            <button
                                key={resultInfo.index}
                                className='sms-btn'
                                onClick={openModal}
                            >
                                SMS 발송
                            </button>
                        </div>
                    </div>

                    <div className='scroll-wrap' ref={scrollRef}>
                        {resultInfo.data.length > 0 ? (
                            <ResultList
                                resultInfo={resultInfo}
                                patientName={resultInfo.data.patientName}
                                checkedItems={checkedItems}
                                setCheckedItems={setCheckedItems}
                                resultItems={resultItems}
                                filterSearch={filterSearch}
                            />
                        ) : (
                            <DefaultData division='3' />
                        )}
                    </div>

                    <div className='scroll-arrow-wrap'>
                        {resultInfo.data.length > 5 && scrollPosition < 50 ? (
                            <ExpandMoreRoundedIcon
                                className='downArrowIcon'
                                onClick={goToBottom}
                            />
                        ) : resultInfo.data.length > 5 &&
                          scrollPosition > 50 ? (
                            <ExpandLessRoundedIcon
                                className='downArrowIcon'
                                onClick={goToTop}
                            />
                        ) : (
                            <> </>
                        )}
                    </div>
                </div>

                <div className='chart-wrap'>
                    <div
                        className={
                            chartOpen
                                ? 'chart chart-line'
                                : 'chart chart-line open'
                        }
                    >
                        <div className='con-title'>
                            <div>
                                <TimelineOutlinedIcon />
                                <p>결과차트</p>
                            </div>
                            <div>
                                <span
                                    className='toggle-chart'
                                    onClick={() => toggleChart()}
                                >
                                    {chartOpen ? (
                                        <KeyboardDoubleArrowRightOutlinedIcon />
                                    ) : (
                                        <KeyboardDoubleArrowLeftOutlinedIcon />
                                    )}
                                </span>
                            </div>
                        </div>
                        {checkedItems.length > 0 ? (
                            <ChartElement
                                checkedItems={checkedItems}
                                date={date}
                            />
                        ) : (
                            <DefaultData division='4' />
                        )}
                    </div>
                    <div
                        className={
                            chartOpen
                                ? 'chart chart-data'
                                : 'chart chart-data open'
                        }
                    >
                        <div className='con-title'>
                            <InsertChartOutlinedIcon />
                            <p>결과차트 데이터</p>
                        </div>
                        <div className='scroll-wrap'>
                            {checkedItems.length > 0 ? (
                                <ChartDataList checkedItems={checkedItems} />
                            ) : (
                                <DefaultData division='4' />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCheck;
