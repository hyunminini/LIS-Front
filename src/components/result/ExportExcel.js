import React from 'react';
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ExportExcel = ({ csvData, fileName }) => {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const Heading = [
        {
            patientNo: '환자번호',
            patientName: '환자이름',
            patientPhoneNumber: '전화번호',
            orderCode: '오더명',
            resultNo: '결과번호',
            registerDt: '접수일',
            sampleName: '검체명',
            prescribeDt: '오더일',
            inspectionName: '검사명',
            figures: '수치',
            baseline: '참고치',
            unit: '단위',
            note: '비고',
        },
    ];

    const exportToCSV = (csvData, fileName, wscols) => {
        const ws = XLSX.utils.json_to_sheet(Heading, {
            header: [
                'patientNo',
                'patientName',
                'patientPhoneNumber',
                'orderCode',
                'resultNo',
                'registerDt',
                'sampleName',
                'prescribeDt',
                'inspectionName',
                'figures',
                'baseline',
                'unit',
                'note',
            ],
            skipHeader: true,
            origin: 0,
        });
        ws['!cols'] = wscols;
        XLSX.utils.sheet_add_json(ws, csvData, {
            header: [
                'patientNo',
                'patientName',
                'patientPhoneNumber',
                'orderCode',
                'resultNo',
                'registerDt',
                'sampleName',
                'prescribeDt',
                'inspectionName',
                'figures',
                'baseline',
                'unit',
                'note',
            ],
            skipHeader: true,
            origin: -1,
        });
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button
            variant='warning'
            onClick={(e) => exportToCSV(csvData, fileName)}
        >
            Export XLSX
        </button>
    );
};

export default ExportExcel;
