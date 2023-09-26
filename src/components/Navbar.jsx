import {Logo,Github,Linkedin} from '../assets/Icons';
import { useNavigate } from 'react-router-dom';


function Navbar(prop){

    const navigate = useNavigate();

    function toHome(){
        prop.setCheck(false)
        prop.setDataSet(null)
        navigate('/home');
    }

    return(
        <div className="text-white text-5xl navHeading md:min-h-[117px] shadow-2xl  mt-4 shadow-slate-900 flex items-center justify-between"
        >
            <div onClick={toHome} className=' flex cursor-pointer'>
                <img  src={Logo} alt="logo" className='cursor-pointer md:w-24 w-5 mr-2' />
                <h3 className="opacity-50 md:text-7xl text-2xl">data</h3>
                <h3 className="md:text-7xl text-2xl">Probe</h3>
            </div>
            <div className='flex gap-4'>
                <img src={Linkedin} alt="" className='w-5'/>
                <img src={Github} alt="" className='w-5'/>
            </div>
        </div>
    )
}

export default Navbar