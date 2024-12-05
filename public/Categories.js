import React from 'react'

const categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() =>
        filterItems("All")}>
      All
      </button>

      <button className='filter-btn' onClick={() =>
        filterItems("breakfast")}>
        breakfast
      </button>

      <button className='filter-btn' onClick={() =>
        filterItems("lunch")}>
       Lunch
      </button>

      <button className='filter-btn' onClick={() =>
        filterItems("dinner")}>
       dinner
      </button>
    </div>
  )
}

export default categories
