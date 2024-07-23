import { useState, useEffect } from 'react';

function InputOrDropdown({ property, dataType, allDataType, setReqChosen, setReq, chartSelected, column }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedItem(null);
  }, [chartSelected]);

  const handleSelect = (item) => {
    if (allDataType[item] === dataType || dataType === "") {
      setSelectedItem(item);
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
    <div className="textFont darkGray text-white border-4 border-black w-full max-w-[280px] sm:max-w-sm mx-auto">
      <div className="p-2 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg sm:text-xl">{property}</h1>
          <h1 className="opacity-70 text-sm sm:text-base">{dataType}</h1>
          {(property === "X Axis" || property === "Y Axis") && <i className='fa fa-asterisk'></i>}
        </div>

        <div className="relative">
          <div 
            className={`p-1 sm:p-2 cursor-pointer w-full text-left text-sm sm:text-base ${
              selectedItem 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-black'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem || "Select an item"}
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white text-black max-h-48 sm:max-h-60 overflow-y-auto shadow-lg">
              {filteredColumns.map((item) => (
                <div 
                  key={item} 
                  className={`p-1 sm:p-2 cursor-pointer text-sm sm:text-base ${
                    item === selectedItem
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item} <span className={`text-xs ${
                    item === selectedItem ? 'text-blue-200' : 'text-gray-500'
                  }`}>({allDataType[item]})</span>
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