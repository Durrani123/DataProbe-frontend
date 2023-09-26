import data from '../chartData.json';
import getColumnName from '../../dataOperations/Functions/getColumnName';
import { useState } from 'react';

import { useDrag } from 'react-dnd';

function DraggableItem({ item ,allDataType}) {
  const [, drag] = useDrag({
    type: 'DRAGGABLE_ITEM',
    item: {
      value: { item }, // Pass the column array as part of the drag item
    },
  });

  return (
    <div ref={drag}>
      <div className="textFont w-fit flex flex-col items-center justify-center bg-white min-h-[58px] min-w-[186px] rounded-2xl">
        <h1 className='text-xl'>{item}</h1>
        <h1 className="opacity-50 text-sm">{allDataType}</h1>
      </div>
    </div>
  );
}

function DraggableComponent(props) {
  const column = props.column;
  const allDataType = props.allDataType
  const [search, setSearch] = useState('');

  const filteredColumns = column.filter(item =>
    item.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center'>
    <div className='flex items-center gap-4'>
      <h1 className='mb-6 md:text-3xl text-xl text-white fonts'>Drag</h1>
      <input
        type="text"
        placeholder="Search"
        className="mb-4 p-2 border border-gray-300 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <div className="border-dashed border-x-4 border-y-4 border-black overflow-auto max-h-[300px] flex flex-col gap-4 darkGray pt-4 pb-4 pl-16 pr-16 w-fit">
        {filteredColumns.map(item => (
          <DraggableItem key={item} item={item} allDataType={allDataType[item]}/>
        ))}
      </div>
    </div>
  );
}

export default DraggableComponent;
