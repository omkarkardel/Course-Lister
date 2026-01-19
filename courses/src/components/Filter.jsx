import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
      setCategory(title);
    }

  return (
    <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4 py-4">
    {
    filterData.map((data) => (
      <button
        key={data.id}
        onClick={() => filterHandler(data.title)}
        className={`text-lg px-4 py-2 rounded-md font-medium text-white bg-slate-800 border-2 hover:bg-opacity-50 transition-all duration-300
        ${category === data.title ? 
        "bg-opacity-60 border-white" :
         "bg-opacity-40 border-transparent"}
        `}
      >{data.title}</button>
    ))
   }
</div>

  )
}

export default Filter
