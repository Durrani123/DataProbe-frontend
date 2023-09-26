import React, { useEffect, useState } from "react";
import getDataType from "../Functions/getDataType";
import sortData from "../Functions/sortData";
import getColumnName from "../Functions/getColumnName";
import Table from "./Table";
import Reset from "./Reset";
import {Upload} from '../../../assets/Icons';


function ShowData(prop){
    const [dataset,setDataSet] = useState(prop.dataSet)
    const [ascend,setAscend] = useState(false)
    useEffect(()=>{
      setDataSet(prop.dataSet)
    },[prop.dataSet])
    
  
    const columns = getColumnName(dataset)
    const dataType = getDataType(dataset,columns)
    function sortColumn(column,dataset){
      sortData(column,dataset,setDataSet,ascend,setAscend)
    }

    return (
      <div className=''>
      <div className="flex md:mt-24 mt-16 md:mb-16 mb-8 justify-center gap-4 items-center">
        <img src={Upload} className="md:w-20 w-10" alt="" />
        <h1 className='text-4xl  headingFont'>Upload your Data</h1>
      </div>
        <div className='md:flex items-center justify-center'>
          <Reset setCheck={prop.setCheck} setFile={prop.setFile} setDataSet={prop.setDataSet}/>
          <Table dataset={dataset} columns={columns} sortColumn={sortColumn} dataType={dataType}/>
        </div>
      </div>
    );
}

export default ShowData