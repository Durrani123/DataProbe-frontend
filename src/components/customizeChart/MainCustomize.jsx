import ShowCustomize from "./components/ShowCustomize";
import { useState } from "react";

import {Customize} from '../../assets/Icons';


function MainCustomize({setSelectedCustom,chart}){
    return(
        <div className="">
            <div className="md:mb-16 mb-8 flex justify-center gap-4 items-center">
              <img src={Customize} className="md:w-20 w-10" alt="" />
              <h1 className='text-4xl headingFont'>Customize</h1>
            </div>        
            <ShowCustomize setSelectedCustom={setSelectedCustom} chart={chart}/>
        </div>
    )
}

export default MainCustomize