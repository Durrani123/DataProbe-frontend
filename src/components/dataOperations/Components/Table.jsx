import React, { useState } from "react";

function Table({ dataset, columns, sortColumn, dataType }) {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRowExpansion = (rowIndex) => {
    if (expandedRows.includes(rowIndex)) {
      setExpandedRows(expandedRows.filter((row) => row !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  return (
    <div className="dataset-table md:max-h-96 max-h-60 overflow-auto md:max-w-screen-md element md:w-fit">
      <table>
        <thead>
          <tr className="grayColor">
            <th className="whiteColor min-w-[80px] rounded-tl-3xl"></th>
            {columns.map((column, index) => (
              <th key={index} className="min-w-[150px]">
                <div className="flex items-center justify-between ml-4 mr-4 mt-2 mb-2 gap-5">
                  <div className="flex items-start flex-col">
                    <h1 className="simpleData font-bold">{column}</h1>
                    <span className="text-sm opacity-30">{dataType[column]}</span>
                  </div>
                  <i
                    onClick={() => sortColumn(column, dataset)}
                    className="cursor-pointer pr-2 fa fa-solid fa-sort"
                  ></i>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mainBackground">
          {dataset.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="grayColor p-3 text-center font-bold text-black  border-b border-black simpleData">
                {rowIndex + 1}
              </td>
              {columns.map((column, columnIndex) => (
                <td
                  className={`p-3 text-center font-bold text-white border-t border-r border-b border-white simpleData`}
                  key={columnIndex}
                  onClick={() => toggleRowExpansion(rowIndex)}
                >
                  {expandedRows.includes(rowIndex) ? (
                    <span>{row[column]}</span>
                  ) : (
                    <div className="truncate cursor-pointer max-w-[150px]">
                      {row[column]}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
