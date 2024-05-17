import React from 'react'

 function Layout({ children }) {
  return (
    <div className=' min-h-[100vh] bg-indigo-800 text-white'>
      <main className=''>
        {children}
      </main>
    </div>
  )
}

export default Layout