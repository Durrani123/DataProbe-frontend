import Navbar from './Navbar';
import Form from './dataOperations/Components/Form';
import { MainPageI,MainPageI1 } from '../assets/Icons';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';



function MainPage(prop){

  const navigate = useNavigate();

  useEffect(()=>{
    if(prop.check===true){
      navigate('/');
    }
  },[prop.check])

  const [dataSet, setDataSet] = useState();
    useEffect(()=>{
        prop.setData(dataSet)
    },[dataSet])

    return(
          <div className="backgroundImage fixed md:pl-48 pl-8 pr-8 md:pr-48  text-white">
            <Navbar setDataSet={prop.setData} setCheck={prop.setCheck}/>
            <div className='flex flex-col justify-center mr-4 absolute top-0 bottom-0 gap-11 md:mt-28'>
              <div className='md:flex md:text-8xl text-4xl gap-10 items-center'>
                <h1 className='mainPageF mb-4'>Start Visualizing</h1>
                <img src={MainPageI} alt="" className='md:w-[150px] w-[90px]'/>
              </div>
              <div className='md:flex items-center'>
                <h2 className='mb-4  text-2xl md:tracking-wider font-bold  trac md:w-[608px] opacity-70 w-fit testFont leading-relaxed'>Experience the power to effortlessly 
                unleash actionable insights from your raw data with DataProbe.</h2>
                <img src={MainPageI1} alt="" className='w-[90px]'/>
              </div>
              <div className='textFont md:text-2xl text-2xl  font-bold'>
              <Form setData={setDataSet} setFile={prop.setFile}/>
              </div>
            </div>
          </div>
    )
}

export default MainPage