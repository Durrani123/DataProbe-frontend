function inferDataType(columnValues) {
    // Remove null values from the columnValues array
    const nonNullValues = columnValues.filter(value => value !== null);
  
    if (nonNullValues.length === 0) {
      return "unknown"; // Handle the case when all values are null
    }
  
    const sampleValues = nonNullValues.slice(0, 10);
    const dataTypes = sampleValues.map(value => typeof value);
  
    // Count the occurrences of each data type in the sample
    const dataTypeCounts = dataTypes.reduce((acc, dataType) => {
      acc[dataType] = (acc[dataType] || 0) + 1;
      return acc;
    }, {});
  
    // Determine the predominant data type
    const predominantDataType = Object.keys(dataTypeCounts).reduce((prev, curr) => {
      return dataTypeCounts[curr] > dataTypeCounts[prev] ? curr : prev;
    });
  
    return predominantDataType;
  }
  




function getDataType(dataset, columns) {
    const returnDataType = {}
    for (const column of columns) {
      const columnValues = dataset.map(item => item[column]);
      returnDataType[column] = inferDataType(columnValues);
    }
    return returnDataType
  }
  

export default getDataType