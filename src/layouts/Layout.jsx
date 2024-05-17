import React from 'react'
// import ShapesBackground from '../components/partials/ShapesBackground'

 function Layout({ children }) {
  return (
    <div className=' min-h-[100vh] bg-indigo-800 text-white'>
      {/* <div className='w-[70vw]'>
      <ShapesBackground/>
      </div> */}
      <main className=''>
        {children}
      </main>
    </div>
  )
}

export default Layout