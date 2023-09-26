import Form from "./Form"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Reset(prop){

    const navigate = useNavigate();

    function toHome(){
        prop.setCheck(false)
        prop.setDataSet(null)
        navigate('/home');
    }

    return (
        <div className="flex flex-col textFont justify-center items-center text-xl text-white md:mb-0 mb-20 md:mr-36">
            <Form setFile={prop.setFile} setData={prop.setDataSet}/>
            <div onClick={toHome} 
                className="cursor-pointer dataRest min-h-[60px] min-w-[250px] drop-shadow-2xl rounded-xl w-fit flex items-center justify-center border-4 border-white">
                <h1>RESET</h1>
            </div>
        </div>
    )
}

export default Reset