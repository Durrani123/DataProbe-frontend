
function sortData(column,dataset,sortDataset,ascend,setAscend){
  console.log(column);
    const compareByColumn = (column) => (a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      };
      const compareByColumnDescending = (column) => (a, b) => {
        if (a[column] > b[column]) return -1; 
        if (a[column] < b[column]) return 1; 
        return 0;
      };
       
    const sortedDataSet = !ascend
    ? dataset.slice().sort(compareByColumn(column))
    : dataset.slice().sort(compareByColumnDescending(column));

    sortDataset(sortedDataSet)
    setAscend(!ascend)
}

export default sortData