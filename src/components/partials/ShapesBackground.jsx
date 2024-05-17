import React from 'react'

function ShapesBackground() {
  return (
    <div className=''>
             <div className="h-screen border-gray-100 ">
            {/* Circle */}
            <div className="w-24 h-24 border-2 border-blue-400 shape circle top-10 left-10"></div>
            <div className="w-16 h-16 border-2 border-red-400 shape circle top-40 left-64"></div>
            <div className="w-32 h-32 border-2 border-yellow-400 shape circle top-80 left-32"></div>


            {/* Square */}
            <div className="border-2 border-purple-400 shape square top-48 left-20"></div>
            <div className="border-2 border-green-400 shape square top-96 left-80"></div>
            <div className="border-2 border-pink-400 shape square top-64 left-40"></div>
        </div>
    </div>
  )
}

export default ShapesBackground
