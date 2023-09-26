import { useEffect, useState } from 'react'

import data from './chartData.json'
import DisplayChart from './components/DisplayChart'
import getColumnName from '../dataOperations/Functions/getColumnName'
import getDataType from '../dataOperations/Functions/getDataType'

import DraggableComponent from './components/DraggableComponent'
import DroppableComponent from './components/DroppableComponent'

import {Select,DragI} from '../../assets/Icons';



function MainChart(prop){
    const dataSet = prop.dataSet
    const setChosenReq = prop.setChosenReq
    const setChart = prop.setChart
   
    const column = getColumnName(dataSet)
    const allDataType = getDataType(dataSet,column)
   
    const [chartSelected,setChartSelected] = useState("Line Chart")
    const selectedChart = data.find(chart => chart.chartType === chartSelected);
   
    const xAxis = selectedChart["X Axis"]
    const yAxis = selectedChart["Y Axis"]
    const hue = selectedChart["hue"]

    const [reqChosen,setReqChosen] = useState()
    const [req,setReq] = useState(null)

    useEffect(() => {
        setReqChosen({
            'X Axis':!(xAxis.value),
            'Y Axis':!(yAxis.value)
        });
        setReq(null)
        setChart(chartSelected)
        setChosenReq(null)
    }, [chartSelected]);

    function buttonCheck(){
        if(reqChosen["X Axis"] && reqChosen["Y Axis"]){
            setChosenReq(req)
        }
    }

    return(
        <div className=''>
            <div className='md:mb-16 mb-8 flex items-center justify-center gap-4'>
                <img src={Select} className='md:w-20 w-10' alt="" />
                <h1 className='headingFont'>Select Chart Type</h1>
            </div>
            <DisplayChart setChartSelected={setChartSelected} chartSelected={chartSelected}/>
            <div className="md:mt-24 mt-16  md:mb-16 mb-8 flex justify-center gap-4 items-center">
              <img src={DragI} className="md:w-20 w-10" alt="" />
              <h1 className=' text-4xl headingFont'>Drag & Drop</h1>
            </div>            
            <div className='md:flex justify-center gap-28'>
                <DraggableComponent column={column} allDataType={allDataType}/>
                <div className='flex flex-col items-center'>
                    <h1 className='mb-6 md:mt-0 mt-10 md:text-3xl text-xl text-white fonts'>Drop</h1>
                    <div className='grid md:grid-cols-2 md:gap-y-8 gap-x-16'>
                        {xAxis.value && <DroppableComponent property={"X Axis"} dataType={xAxis.dataType} allDataType={allDataType} setReqChosen={setReqChosen} setReq={setReq} chartSelected={chartSelected}/>}
                        {yAxis.value && <DroppableComponent property={"Y Axis"} dataType={yAxis.dataType} allDataType={allDataType} setReqChosen={setReqChosen} setReq={setReq} chartSelected={chartSelected}/>}
                        {hue.value && <DroppableComponent property={"Hue"} dataType={hue.dataType} allDataType={allDataType} setReqChosen={setReqChosen} setReq={setReq} chartSelected={chartSelected}/>}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h1 
                className='textFont text-white lightGreen text-3xl md:mt-10 mt-5   flex items-center justify-center min-w-[220px] min-h-[50px]  cursor-pointer'
                onClick={()=>buttonCheck()}>
                Submit</h1>
            </div>
        </div>
    )
}

export default MainChart