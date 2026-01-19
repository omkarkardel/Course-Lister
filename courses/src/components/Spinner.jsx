import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (

     <div className="spinner-wrapper flex flex-col items-center space-y-2">
      <div className="loader"></div>
      <p  className="text-center text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Spinner
