// import React, { useEffect, useState } from "react";
// import Papa from "papaparse";


// import Form from "./Components/Form";
// import ShowData from "./Components/ShowData";

// function MainData(prop){

//     const [dataSet, setDataSet] = useState(null);
//     useEffect(()=>{
//         prop.setDataSet(dataSet)
//     },[dataSet])

//     return (
//         <div>
//             <Form setData={setDataSet} setFile={prop.setFile}/>
//             {dataSet && <ShowData dataSet={dataSet} />}
//         </div>
//     )
// }

// export default MainData


import React, { useEffect, useState } from "react";
import Papa from "papaparse";


import Form from "./Components/Form";
import ShowData from "./Components/ShowData";

function MainData(prop){

    return (
        <div>
            {prop.dataSet && <ShowData setCheck={prop.setCheck} dataSet={prop.dataSet} setFile={prop.setFile} setDataSet={prop.setDataSet}/>}
        </div>
    )
}

export default MainData