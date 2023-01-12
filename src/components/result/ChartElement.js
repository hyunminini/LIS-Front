import React, { memo, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { getRandomPastelHSL } from '../../utils/index';

const ChartElement = ({ checkedItems }) => {
    const initData = [
        {
            type: 'line',
            label: '-',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [{ x: new Date().toISOString().split(/[!T,?]/)[0], y: 0 }],
        },
    ];

    const [chartData, setChartData] = useState();

    useEffect(() => {
        Initialize();
    }, []);

    console.log(chartData);

    useEffect(() => {
        const sortData = () => {
            if (checkedItems.length > 0 && checkedItems) {
                const sorted = checkedItems.sort(
                    (a, b) => b.registerDt - a.registerDt,
                );
                setChartData(createChartDatasets(sorted));
            }
        };
        sortData();
    }, [checkedItems]);

    const Initialize = () => {
        Chart.register(CategoryScale);
    };

    const createChartDatasets = (data) => {
        let checkupNames = [];
        let uniqueCheckupNames = [];
        let chartDatasets = [];

        for (const value of data) {
            checkupNames.push(value.inspectionName);
            uniqueCheckupNames = [...new Set(checkupNames)];
        }

        for (const checkupName of uniqueCheckupNames) {
            chartDatasets = [
                ...chartDatasets,
                {
                    type: 'bar',
                    label: checkupName,
                    backgroundColor: getRandomPastelHSL(),
                    // borderColor: getRandomRGB(),
                    // borderWidth: 2,
                    data: [],
                },
            ];
        }

        for (const label of uniqueCheckupNames) {
            const index = chartDatasets.findIndex(
                (chartData) => label === chartData.label,
            );

            for (const checkupResult of data) {
                if (label === checkupResult.inspectionName) {
                    chartDatasets[index].data = [
                        ...chartDatasets[index].data,
                        {
                            x: checkupResult.registerDt,
                            y: checkupResult.figures,
                            referenceValue: checkupResult.baseline,
                        },
                    ];
                }
            }
        }
        return chartDatasets;
    };

    const data = {
        datasets: chartData ? chartData : initData,
    };

    Tooltip.positioners.custom = (elements, eventPositon) => {
        return {
            x: eventPositon.x,
            y: eventPositon.y,
        };
    };

    const options = {
        spanGaps: true,
        maxBarThickness: 30,
        grouped: true,
        interaction: {
            mode: 'index',
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: false,
                    padding: 10,
                    font: {
                        family: "'Noto Sans KR', 'serif'",
                        lineHeight: 1,
                    },
                },
            },
            tooltip: {
                position: 'custom',
                backgroundColor: 'rgba(124, 35, 35, 0.4)',
                padding: 10,
                bodySpacing: 5,
                bodyFont: {
                    font: {
                        family: "'Noto Sans KR', sans-serif",
                    },
                },
                usePointStyle: true,
                filter: (item) => item.parsed.y !== null,
                callbacks: {
                    title: (context) => context[0].label,
                    label: (context) => {
                        let label = context.dataset.label + '' || '';

                        return context.parsed.y !== null &&
                            context.raw.referenceValue !== null
                            ? `${label}: ${context.parsed.y} / ${context.raw.referenceValue} `
                            : null;
                    },
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        onClick: (event, element) => {
            console.log(element);
        },
        scales: {
            x: {
                afterTickToLabelConversion: (scaleInstance) => {
                    const ticks = scaleInstance.ticks;

                    const newTicks = ticks.map((tick) => {
                        return {
                            ...tick,
                            label: tick.label,
                        };
                    });
                    scaleInstance.ticks = newTicks;
                },
                grid: {
                    display: false,
                    drawTicks: true,
                    tickLength: 4,
                    color: '#E2E2E230',
                },
                axis: 'x',
                position: 'bottom',
                ticks: {
                    display: true,
                    minRotation: 0,
                    padding: 10,
                },
            },
            y: {
                type: 'linear',
                grid: {
                    color: '#f0f0f0',
                },
                axis: 'y',
                display: true,
                position: 'left',
                title: {
                    display: false,
                    align: 'end',
                    color: '#808080',
                    font: {
                        size: 12,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '단위: 배',
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.2;
                },
            },
            y_sub: {
                display: false,
                position: 'right',
                title: {
                    display: false,
                    align: 'end',
                    color: '#808080',
                    font: {
                        size: 12,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '단위: 배',
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.2;
                },
            },
        },
    };

    return (
        <Container>
            <Line type='line' data={data} options={options} />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 10px;
    height: 100%;
    max-height: 324px;
`;

export default memo(ChartElement);
