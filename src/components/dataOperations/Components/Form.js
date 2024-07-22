import React from "react";
import Papa from "papaparse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form(props) {
  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    
    if (file) {
      if (file.type !== "text/csv") {
        toast.error('Please upload a CSV file!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      props.setFile(file);
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const { data: dataset } = result;
          props.setData(dataset);
          toast.success('CSV file uploaded successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        error: (error) => {
          console.error("CSV parsing error:", error);
          toast.error('Error parsing CSV file. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      });
    }
  };

  return (
    <>
      <label
        htmlFor="file-input"
        className="cursor-pointer dataColor min-h-[60px] min-w-[250px] drop-shadow-2xl rounded-full w-fit flex items-center justify-center mb-14"
      >
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
          accept=".csv"
        />
        Upload Data Set
      </label>
      <ToastContainer />
    </>
  );
}

export default Form;