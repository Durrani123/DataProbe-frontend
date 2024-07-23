import { useState } from 'react';

import {
    barChart,
    areaChart,
    boxPlot,
    countPlot,
    histogram,
    lineChart,
    scatterPlot,
} from '../../../assets/images';

import data from '../chartData.json'

function DisplayChart(props) {
    const imageMapping = [
        lineChart,
        areaChart,
        scatterPlot,
        barChart,
        histogram,
        boxPlot,
        countPlot,
    ];
    
    function setChart(chartType) {
        props.setChartSelected(chartType)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {data.map((chart, index) => (
                <div
                    onClick={() => setChart(chart.chartType)} 
                    key={chart.chartType}
                    className={`bg-white cursor-pointer p-4 rounded-2xl flex items-center justify-between ${
                        chart.chartType === props.chartSelected ? "opacity-50" : ""
                    }`}
                >
                    <div className='textFont flex-1 mr-4'>
                        <h1 className="text-lg sm:text-xl lg:text-2xl chartType pb-1 sm:pb-2">{chart.chartType}</h1>
                        <h1 className='text-sm sm:text-base lg:text-lg opacity-30'>{chart.shortDescription}</h1>
                    </div>
                    <div className="flex-shrink-0">
                        <img className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" src={imageMapping[index]} alt={chart.chartType} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayChart