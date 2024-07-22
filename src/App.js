






import React, { useEffect, useState } from "react";
import { Routes, Route ,Link,useNavigate } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import MainPage from "./components/MainPage";

import Navbar from "./components/Navbar";

import MainData from "./components/dataOperations/MainData";
import MainChart from "./components/selectChart/MainChart";
import MainCustomize from "./components/customizeChart/MainCustomize";
import MainShowChart from "./components/showChart/MainShowChart";
import Nav from "./components/showChart/Nav";

import './App.css';
import './Colors.css'

import data from './components/selectChart/chartData.json'

function App() {

  const [dataSet, setDataSet] = useState(null);
  const [chosenReq,setChosenReq] = useState(null);
  const [selectedCustom, setSelectedCustom] = useState(null)
  const [chart,setChart] = useState(null)
  const [file,setFile] = useState(null)
  const [check,setCheck]= useState(false)


  const [selectedChart,setSelectedChart] = useState(null)
  useEffect(()=>{
    if(chart){
      const selected = data.find(charts => charts.chartType === chart);
      setSelectedChart(selected['generate'])
    }
  },[chart])

  useEffect(()=>{
    if(dataSet){
      setCheck(true)
    }
  },[dataSet])

  const navigate = useNavigate();


  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {check && (
              <div className="blackColor absolute w-full">
                <div className=" md:pl-48 pl-8 pr-8 md:pr-48">
                  <Navbar setDataSet={setDataSet} setCheck={setCheck}/>
                </div>
                <div className="flex flex-col md:gap-24 gap-16">
                  {<MainData setDataSet={setDataSet} setCheck={setCheck} setFile={setFile} dataSet={dataSet}/>}
                  <DndProvider backend={HTML5Backend}>
                    <MainChart dataSet={dataSet} setChosenReq={setChosenReq} setChart={setChart}/>
                  </DndProvider>
                  <MainCustomize setSelectedCustom={setSelectedCustom} chart={chart}/>
                  {chosenReq && <MainShowChart file={file} chosenReq={chosenReq} chart={selectedChart} selectedCustom={selectedCustom}/>}
                </div>
              </div>
            )}
            {!check && <Nav/>}
          </>
        }
      />
      <Route 
        path="/home"
        element={
          <>
          <MainPage setData={setDataSet} setCheck={setCheck} setFile={setFile} check={check}/>
          </>
        }
      />
    </Routes>
  );
}

export default App;










// import React, { useEffect, useState } from "react";
// import { Routes, Route ,Link} from "react-router-dom";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';


// import MainPage from "./components/MainPage";

// import Navbar from "./components/Navbar";

// import MainData from "./components/dataOperations/MainData";
// import MainChart from "./components/selectChart/MainChart";
// import MainCustomize from "./components/customizeChart/MainCustomize";
// import MainShowChart from "./components/showChart/MainShowChart";


// import './App.css';
// import './Colors.css'

// import data from './components/selectChart/chartData.json'

// function App() {

//   const [dataSet, setDataSet] = useState();
//   const [check,setCheck]= useState(false)

//   const [chosenReq,setChosenReq] = useState(null);
//   const [selectedCustom, setSelectedCustom] = useState(null)
//   const [chart,setChart] = useState(null)
//   const [file,setFile] = useState(null)

//   const [selectedChart,setSelectedChart] = useState(null)
//   useEffect(()=>{
//     if(chart){
//       const selected = data.find(charts => charts.chartType === chart);
//       setSelectedChart(selected['generate'])
//     }
//   },[chart])

//   useEffect(()=>{
//     if(dataSet){
//       setCheck(true);
//     }
//   },[dataSet])

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//           {check &&
//             <div className="blackColor absolute w-full">
//               <div className=" md:pl-48 pl-8 pr-8 md:pr-48">
//                 <Navbar />
//               </div>
//               <div className="flex flex-col md:gap-24 gap-16">
//                 {/* <MainData setDataSet={setDataSet} setFile={setFile}/> */}
//                 <DndProvider backend={HTML5Backend}>
//                   <MainChart dataSet={dataSet} setChosenReq={setChosenReq} setChart={setChart}/>
//                 </DndProvider>
//                 <MainCustomize setSelectedCustom={setSelectedCustom} chart={chart}/>
//                 {chosenReq && <MainShowChart file={file} chosenReq={chosenReq} chart={selectedChart} selectedCustom={selectedCustom}/>}
//               </div>
//             </div>
//             }
//             {!check && 
//               <MainPage setData={setDataSet} setFile={setFile} dataSet={dataSet}/>
//             }
//           </>
//         }
//       />
//       <Route 
//         path="/home"
//         element={
//           <>
//           <MainPage setDataSet={setDataSet} setFile={setFile} dataSet={dataSet}/>
//           </>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
