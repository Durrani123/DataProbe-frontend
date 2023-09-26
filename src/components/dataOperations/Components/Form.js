
// import Papa from "papaparse";

// function Form(props) {
//   const handleFileChange = (event) => {
//     event.preventDefault();
//     const file = event.target.files[0];
//     props.setFile(file)
//     if (file) {
//       Papa.parse(file, {
//         header: true,
//         dynamicTyping: true,
//         complete: (result) => {
//           const { data: dataset } = result;
//           props.setData(dataset);
//         },
//         error: (error) => {
//           console.error("CSV parsing error:", error);
//         },
//       });
//     }
//   };

//   return (
//     <div>
//       <form  action="">
//       <div 
//       className="dataColor min-h-[60px] min-w-[250px] drop-shadow-2xl rounded-full w-fit flex items-center justify-center mb-14"
//       >
//        <input type="file" name="file-input" id="file-input" className="hidden" onChange={handleFileChange}/>
//        <label id="file-input-label" for="file-input"
//       >Select a File</label>
//       </div>
//         <input type="file"  onChange={handleFileChange}
//         placeholder="Upload" 
//           className="dataColor min-h-[60px] max-w-[250px] drop-shadow-2xl rounded-full w-fit flex items-center justify-center mb-14"
//         />
//       </form>
//     </div>
//   );
// }

// export default Form;



import Papa from "papaparse";

function Form(props) {
  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    props.setFile(file)
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const { data: dataset } = result;
          props.setData(dataset);
        },
        error: (error) => {
          console.error("CSV parsing error:", error);
        },
      });
    }
  };

  return (
      <label
      htmlFor="file-input" // Use htmlFor instead of "for" to associate with the input
      className=" cursor-pointer dataColor min-h-[60px] min-w-[250px] drop-shadow-2xl rounded-full w-fit flex items-center justify-center mb-14"
      >
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
        />
        Upload Data Set
      </label>
  
  );
}

export default Form;
