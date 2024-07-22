import { useState, useEffect } from 'react';

function InputOrDropdown({ property, dataType, allDataType, setReqChosen, setReq, chartSelected, column }) {
  const [droppedItem, setDroppedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDroppedItem(null);
  }, [chartSelected]);

  const handleSelect = (item) => {
    if (allDataType[item] === dataType || dataType === "") {
      setDroppedItem(item);
      if (property === "X Axis" || property === "Y Axis") {
        setReqChosen(prevState => ({
          ...prevState,
          [property]: true
        }));
      }
      setReq(prevState => ({
        ...prevState,
        [property]: item
      }));
    }
    setIsOpen(false);
  };

  const filteredColumns = column.filter(item => 
    dataType === "" || allDataType[item] === dataType
  );

  return (
    <div className="textFont darkGray text-white border-4 border-black">
      <div className="min-h-[114px] min-w-[276px] flex flex-col items-center">
        <div className="flex items-center mb-2 min-w-[200px]">
          <h1 className="text-xl w-1/3">{property}</h1>
          <h1 className="w-1/3 opacity-70 text-base">{dataType}</h1>
          {(property === "X Axis" || property === "Y Axis") && <i className='w-1/3 fa fa-asterisk'></i>}
        </div>

        {/* Desktop version (drag and drop) */}
        <div className="hidden md:flex mt-2 items-center justify-center min-h-[45px] min-w-[232px] bg-white cursor-pointer">
          <h1 className={`text-xl ${droppedItem ? "opacity-100" : "text-black opacity-40"}`}>
            {droppedItem ? droppedItem : "Drop Here"}
          </h1>
        </div>

        {/* Mobile version (dropdown) */}
        <div className="md:hidden w-full px-4">
          <div 
            className="bg-white text-black p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {droppedItem || "Select an item"}
          </div>
          {isOpen && (
            <div className="mt-1 bg-white text-black max-h-40 overflow-y-auto">
              {filteredColumns.map((item) => (
                <div 
                  key={item} 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  {item} <span className="text-xs text-gray-500">({allDataType[item]})</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default InputOrDropdown;