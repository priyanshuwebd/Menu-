import React, { useState } from 'react'
import data from "./data"
import Categories from './Categories'
import Menu from './Menu'
import "./App.css"

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState([])

  const filterItems = (category)=>{
    if (category ==="all"){
      setMenuItems(data);
      return;
    }
    const newItems =data.filter((data)=>data.category=== category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems = {filterItems}/>
        <Menu data={menuItems} />
      </section>
    </main>
  )
}

export default App
