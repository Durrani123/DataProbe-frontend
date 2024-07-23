import React, { useEffect, useState } from 'react';
import options from '../customizeData.json';

function ShowCustomize({setSelectedCustom,chart}) {
    const [activeOption, setActiveOption] = useState({});
    const [hoverName, setHoverName] = useState();
    const [hoverProp, setHoverProp] = useState();
    


    const [selectedCust, setSelectedCust] = useState(
        options.reduce((acc, option) => {
          acc[option.name] = option.default;
          return acc;
        }, {
          title: 'DataProbe' // Set the default value for the 'title' property here
        })
    );
      
    const color = ['yellow','green','darkBlue','lightBlue','yellow']

    const [title,setTitle] = useState("DataProbe")

    const handleClick = (index) => {
        if (activeOption[index] === true) {
            setActiveOption(prevState=>({
                [index]:false
            }));
        } else {
            setActiveOption(prevState=>({
                [index]:true
            }));
        }
    };

    function setCustomaization(name,value){
        setSelectedCust(prevState=>({
            ...prevState,
            [name]:value
        }))
    }

    useEffect(()=>{
        setSelectedCustom(selectedCust)
    },[selectedCust])

    function handleTitle(){
        setCustomaization('title',title)
    }

    function checkChart(option) {
        if ( chart !== 'Line Chart' && chart !== 'Area Chart' && chart !== 'Scatter Plot') {
          if (option === 'Line Shape' || option === 'Line Dash') {
            return false;
          }
        }
        return true;
      }

    return (
        <div className='flex flex-col items-center justify-center md:gap-y-8 gap-y-2'>
            {options.map((option, index) =>  (
               <div key={index}>
                    {checkChart(option.name) && (
                    <div className='relative flex items-center gap-x-8'>
                        <div className='relative flex items-center justify-center'>
                        {hoverName === option.name && 
                        <div className='hidden md:flex z-10 absolute right-[100%] -ml-2'>
                            <div className='textFont p-2 min-w-[129px] rounded-2xl simpleData bg-white '>
                                <h3 className='opacity-50'>
                                    {option.description}
                                </h3>
                            </div>    
                            <div className='flex items-center justify-center'>
                                <div className='polygon w-[20px] h-[15px] bg-white'></div>
                            </div>
                        </div>
                        }
                            <div className='flex items-center justify-center'>
                                <h3 onClick={() => handleClick(index)}
                                    onMouseEnter={() => setHoverName(option.name)}
                                    onMouseLeave={() => setHoverName()}
                                     className={`${color[index]} cursor-pointer shadow-2xl textFont text-2xl text-white darkGray min-w-[244px] min-h-[75px] flex items-center justify-center  
                                     ${activeOption[index] ? 'opacity-50 border-dashed border-x-2 border-y-2 border-black ' : ''}`}
                                    >
                                    {option.name}
                                </h3>
                            </div>
                        </div>
                        <div className={`gap-8 md:relative absolute top-0 left-0 z-10 
                         ${activeOption[index] ? 'md:flex custom-opacity-100 animate-fadeIn md:-translate-x-0 md:-translate-y-0 -translate-x-20 -translate-y-20 ' : 'custom-opacity-0 animate-fadeOut hidden'}`}>
                         
                        {option.choices.map((choice, choiceIndex) => (
                            <div
                            onClick={()=>setCustomaization(option.name,choice.value)}
                            key={choiceIndex}
                            className={`${color[choiceIndex+1]} shadow-2xl relative cursor-pointer textFont text-lg text-white darkGray min-w-[156px] min-h-[57px] flex items-center justify-center 
                            ${choice.value === selectedCust[option.name] ? 
                            '  border-dashed opacity-50 border-x-2 border-y-2 border-black ' : ''}`}
                            onMouseEnter={() => setHoverProp(choice.name)}
                            onMouseLeave={() => setHoverProp()}
                            >
                            {choice.name}
                            {hoverProp === choice.name && 
                            <div className='hidden md:flex md:flex-col opacity-100 z-10 absolute bottom-[100%] -ml-2'>
                                <div className='textFont p-2 min-w-[129px] rounded-2xl simpleData bg-white '>
                                    <h3 className='text-black'>
                                        {choice.description}
                                    </h3>
                                </div>    
                                <div className='flex items-center justify-center'>
                                    <div className='propPolyogn w-[20px] h-[15px] bg-white'></div>
                                </div>
                            </div>
                            }
                            </div>
                        ))}
                        </div>
                    </div>)}
                </div>
            ))}
            <div className={activeOption['title'] === true ? 'relative flex gap-x-8' :''}>
            <h3 onClick={() => handleClick('title')}
                     className={`cursor-pointer textFont text-2xl text-white darkGray min-w-[244px] min-h-[75px] flex items-center justify-center  
                     ${activeOption['title'] ? 'diffColor shadow-2xl border-dashed border-x-2 border-y-2 border-black ' : ''}`}
                    >Title</h3>
                {activeOption['title'] === true && (
                <div className={`md:relative absolute top-0 left-0 z-10 gap-4 items-center 
                         ${activeOption['title'] ? 'md:flex custom-opacity-100 animate-fadeIn md:-translate-x-0 md:-translate-y-0 -translate-x-20 -translate-y-20 ' : 'custom-opacity-0 animate-fadeOut hidden'}`}>
                         
                <div className='textFont text-lg  flex items-center justify-center'>
                <input type="text" className='p-2' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button className='redColor text-white min-w-[20px] min-h-[35px] p-2 textFont min-[]:' onClick={handleTitle}>Submit</button>
                </div>
            )}
            </div>
        </div>
    );
}

export default ShowCustomize;
