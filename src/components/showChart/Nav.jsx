import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Nav(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/home');
    })
}

export default Nav