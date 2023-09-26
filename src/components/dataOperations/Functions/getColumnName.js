function getColumnName(dataset){
    const columns = dataset.length > 0 ? Object.keys(dataset[0]) : [];
    return columns
}
export default getColumnName