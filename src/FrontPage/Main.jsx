import './styles.css';
import Navbar from './componentsFront/Navbar';
import Footer from './componentsFront/Footer';
import CTA from './componentsFront/CTA';
import Features from './componentsFront/Features';

import Form from '../components/dataOperations/Components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';


function LandingPage(prop) {

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


  return (

    <div className='bg-gray-900'>
      <Navbar/>
      <CTA setData={setDataSet} setFile={prop.setFile}/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
