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

function DisplayChart(props){
    const imageMapping = [
        lineChart,
        areaChart,
        scatterPlot,
        barChart,
        histogram,
        boxPlot,
        countPlot,
    ];
    
    function setChart(chartType){
        props.setChartSelected(chartType)
    }

    return(
    <div className="grid md:grid-cols-3 w-fit gap-x-32 gap-y-6 mx-auto">
        {data.map((chart, index) => (
        <div
        onClick={() =>setChart(chart.chartType)} key={chart.chartType}
        className={`bg-white cursor-pointer pt-4 pb-4 min-h-[60px] md:min-w-[330px] min-w-[250px]  justify-between rounded-2xl flex items-center pl-8 pr-8 ${
          chart.chartType === props.chartSelected ? "opacity-50" : ""
        }`}>
          <div className='textFont'>
            <h1 className="text-2xl chartType pb-2">{chart.chartType}</h1>
            <h1 className='text-lg opacity-30'>{chart.shortDescription}</h1>
          </div>
          <div>
            <img className="w-20 h-20" src={imageMapping[index]} alt="My Image" />
          </div>
        </div>
        ))}
    </div>
    )
}

export default DisplayChart