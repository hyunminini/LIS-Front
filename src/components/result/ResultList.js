/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { FaEquals } from 'react-icons/fa';

const ResultList = ({
    resultInfo,
    checkedItems,
    setCheckedItems,
    resultItems,
    filterSearch,
}) => {
    const handleSingleCheck = (checked, resultNo) => {
        if (checked) {
            setCheckedItems((checkedItems) => [...checkedItems, resultNo]);
        } else {
            setCheckedItems(checkedItems.filter((del) => del !== resultNo));
        }
    };

    const sortType = {
        orderCode: '오더명',
        registerDt: '접수일',
        sampleName: '검체명',
        prescribeDt: '오더일',
        inspectionName: '검사명',
        figures: '수치',
    };

    const [sortInfo, setSortInfo] = useState({});
    const [sortedData, setSortedData] = useState([]);

    const initialize = () => {
        setSortInfo({
            orderCode: 'asc',
            registerDt: 'asc',
            sampleName: 'asc',
            prescribeDt: 'asc',
            inspectionName: 'asc',
            figures: 'asc',
        });
    };

    useEffect(() => {
        initialize();
    }, []);

    const sortData = (type) => {
        const sorted = resultInfo.data.sort((a, b) => {
            if (typeof a[type] === 'string') {
                return sortInfo[type] === 'asc'
                    ? b[type].localeCompare(a[type])
                    : a[type].localeCompare(b[type]);
            } else {
                return sortInfo[type] === 'asc'
                    ? b[type] - a[type]
                    : a[type] - b[type];
            }
        });

        setSortedData({ documents: sorted });
    };

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th> </th>
                        {Object.entries(sortType).map(([key, value]) => {
                            return (
                                <th
                                    key={key}
                                    onClick={(e) => {
                                        const sortOrder =
                                            sortInfo[key] === 'asc'
                                                ? 'desc'
                                                : 'asc';

                                        setSortInfo({
                                            [key]: sortOrder,
                                        });

                                        sortData(key);
                                    }}
                                >
                                    {value}{' '}
                                    {sortInfo[key] === 'asc' ? (
                                        <ArrowDropUpOutlinedIcon className='dropArrow' />
                                    ) : sortInfo[key] === 'desc' ? (
                                        <ArrowDropDownOutlinedIcon className='dropArrow' />
                                    ) : null}
                                </th>
                            );
                        })}
                        <th>참고치/단위</th>
                        <th>HL</th>
                        <th>비고</th>
                    </tr>

                    {resultItems?.length > 0 && resultItems
                        ? resultItems
                              .filter((searchData) =>
                                  filterSearch === ''
                                      ? true
                                      : (searchData.inspectionName
                                            ? searchData.inspectionName.includes(
                                                  filterSearch,
                                              )
                                            : false) ||
                                        (searchData.inspectionName
                                            ? searchData.inspectionName.includes(
                                                  filterSearch,
                                              )
                                            : false),
                              )
                              .map((data, key) => {
                                  return (
                                      <tr key={key}>
                                          <td>
                                              <input
                                                  type='checkbox'
                                                  onChange={(e) =>
                                                      handleSingleCheck(
                                                          e.target.checked,
                                                          resultInfo.data[key],
                                                      )
                                                  }
                                                  checked={
                                                      checkedItems.includes(
                                                          resultInfo.data[key],
                                                      )
                                                          ? true
                                                          : false
                                                  }
                                              />
                                          </td>
                                          <td>{data.orderCode}</td>
                                          <td>{data.registerDt}</td>
                                          <td>{data.sampleName}</td>
                                          <td>{data.prescribeDt}</td>
                                          <td>{data.inspectionName}</td>
                                          <td>{data.figures}</td>
                                          <td>
                                              {data.baseline} /{' '}
                                              {data.unit.trim() ? (
                                                  data.unit
                                              ) : (
                                                  <span>-</span>
                                              )}
                                          </td>
                                          <td>
                                              {data.figures > data.baseline ? (
                                                  <GoArrowUp className='arrow-up' />
                                              ) : data.figures ===
                                                data.baseline ? (
                                                  <FaEquals className='equals' />
                                              ) : (
                                                  <GoArrowDown className='arrow-down' />
                                              )}
                                          </td>

                                          <td>
                                              {data.note ? (
                                                  data.note
                                              ) : (
                                                  <span>-</span>
                                              )}
                                          </td>

                                          <td className='note-text'>
                                              {data.note ? (
                                                  data.note
                                              ) : (
                                                  <span>-</span>
                                              )}
                                          </td>
                                      </tr>
                                  );
                              })
                        : null}
                </tbody>
            </table>
        </>
    );
};

export default ResultList;
