import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Plot from 'react-plotly.js';
import Spinner from "./components/Spinner";
import {MainPageI} from '../../assets/Icons';


function Visualize({ file, chosenReq, chart, selectedCustom }) {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cancelTokenSourceRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("columns", JSON.stringify(chosenReq));
        formData.append("chosenReq", JSON.stringify(chosenReq));
        formData.append("chart", JSON.stringify(chart));
        formData.append("selectedCustom", JSON.stringify(selectedCustom));
  
        // Set isLoading to true when starting a new request
        setIsLoading(true);
  
        cancelTokenSourceRef.current = axios.CancelToken.source();
        const response = await axios.post("https://durrani123.pythonanywhere.com/api/home", formData, {
          responseType: "text",
          cancelToken: cancelTokenSourceRef.current.token,
        });
          const responseData = JSON.parse(response.data);
          const gottenData = JSON.parse(responseData.chartData);
          setChartData(gottenData);
          setIsLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error sending file:", error);
        }
      }
    };
  
    fetchData();
  
    return () => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel("Request canceled");
      }
    };
  }, [chosenReq, selectedCustom]); 
  

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <div className='flex items-center md:mb-16 mb-8 justify-center gap-4'>
            <img src={MainPageI} className='md:w-20 w-10' alt="" />
            <h1 className='headingFont'>Visualize</h1>
          </div>
        <Plot className="md:max-w-screen-xl max-w-md w-full md:max-h-screen" data={chartData.data} layout={chartData.layout} config={{ responsive: true }} />
        </div>
      )}
    </div>
  );
}

export default Visualize;
