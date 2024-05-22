import React from 'react'

const Header = () => {
  return (
    <div>
         <header className="container mx-auto flex items-center gap-4 py-6 ">
      <img src="https://www.mbacollegesbangalore.in/wp-content/uploads/2017/10/Presidency-University.png" alt="Presidency University" className="w-16 h-16" />
      <div>
        <p>Gain More Knowledge, Reach Greater Heights</p>
      </div>
      <div className="ml-auto">
        <button className="bg-transparent border rounded px-4 py-2 text-lg">Sign In</button>
        <button className="bg-black text-white rounded px-4 py-2 ml-2 text-lg">Sign Up</button>
      </div>
    </header>
    </div>
  )
}

export default Header