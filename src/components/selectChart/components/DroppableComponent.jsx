// import { useDrop } from 'react-dnd';
// import { useEffect, useState } from 'react';

// function DroppableComponent(props) {
//   const { property, dataType, allDataType,setReqChosen,setReq,chartSelected } = props;
//   const [droppedItem, setDroppedItem] = useState();

//   const [{ isOver }, drop] = useDrop({
//     accept: 'DRAGGABLE_ITEM',
//     drop: (item) => {
//       const gottenItem = item.value.item
//       if(allDataType[gottenItem] === dataType || dataType === ""){
//         setDroppedItem(gottenItem);
//         if(property === "X Axis"  || property === "Y Axis"){
//           setReqChosen(prevState => ({
//             ...prevState,
//             [property]: true
//           }));
//         }
//         setReq(prevState =>({
//           ...prevState,
//           [property]:gottenItem
//         }))
//       }
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   useEffect(()=>{
//     setDroppedItem(null)
//   },[chartSelected])

//   return (
//     <div ref={drop} >
//       {droppedItem ? 
//       <DraggableItem item={droppedItem} /> 
//       : <div className='flex items-center gap-2'>
//       <h1 className='text-2xl'>{property}</h1> 
//       <span className='text-sm'>
//         {dataType}
//         {dataType === "string" && " (categorical)"}
//       </span>
//       </div>
//       }
//     </div>
//   );
// }

// function DraggableItem({ item }) {
//   return (
//     <div>
//       <h1 className='text-2xl'>{item}</h1>
//     </div>
//   );
// }

// export default DroppableComponent

import { useDrop } from 'react-dnd';
import { useEffect, useState } from 'react';

function DroppableComponent(props) {
  const { property, dataType, allDataType,setReqChosen,setReq,chartSelected } = props;
  const [droppedItem, setDroppedItem] = useState();

  const [{ isOver }, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    drop: (item) => {
      const gottenItem = item.value.item
      if(allDataType[gottenItem] === dataType || dataType === ""){
        setDroppedItem(gottenItem);
        if(property === "X Axis"  || property === "Y Axis"){
          setReqChosen(prevState => ({
            ...prevState,
            [property]: true
          }));
        }
        setReq(prevState =>({
          ...prevState,
          [property]:gottenItem
        }))
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(()=>{
    setDroppedItem(null)
  },[chartSelected])

  return (
    <div className='textFont darkGray text-white  border-x-4 border-y-4 border-black' ref={drop}>
      <div className="min-h-[114px] min-w-[276px] flex flex-col items-center ">
            <div className="flex items-center mb-2 min-w-[200px]">
                <h1 className="text-xl w-1/3">{property}</h1>
                <h1 className="w-1/3 opacity-70 text-base">{dataType}</h1>
                {(property === "X Axis" || property === "Y Axis") &&
                 <i className='w-1/3 fa fa-asterisk'></i>
                 }
            </div>
            
            <div className={` mt-2 flex items-center justify-center min-h-[45px] min-w-[232px] bg-white ${
              droppedItem ? "dataRest shadow-2xl " : "" }`}>
              <h1 className={` text-xl  ${
                  droppedItem ? "opacity-100" : " text-black opacity-40" }`}>
                {droppedItem ? droppedItem : "Drop Here"}
              </h1>
            </div>
            </div>
      
    </div>
  );
}


export default DroppableComponent