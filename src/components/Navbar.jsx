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
        <div className="flex justify-between pt-4 custom-screen">
            <h1 onClick={toHome} className="text-xl bg-clip-text  text-transparent bg-gradient-to-r font-semibold sm:text-2xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            dataProbe
            </h1>
            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/m-abdur-rahman-durrani-495933232/"><img src={Linkedin} alt="" className='w-5'/></a>
                <a href="https://github.com/Durrani123/"><img src={Github} alt="" className='w-5'/></a>
            </div>
        </div>
    )
}

export default Navbar