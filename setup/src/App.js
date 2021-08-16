import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

//items.map((item) => item.category) return an array with all the value category
//new Set(items.map((item) => item.category)) this return an array with only the unique value without repetition
//['all', ...new Set(items.map((item) => item.category))] then the spread operator like this turn a new array with the unique value and the all value
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
