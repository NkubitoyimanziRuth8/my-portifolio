import React from 'react'
import img3 from "../images/quiz.jpg"
import img4 from "../images/todo.jpg"

const Portifolio = () => {
    const portifolio =[
        {
            id:1,
            src:img3
        },
        {
            id:2,
            src:img4
        },
        {
            id:3,
            src:img3
        },
        {
            id:4,
            src:img4
        },
        {
            id:5,
            src:img3
        },
    ]
  return (
    <div name="portifolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen justify-between"
    >
<div className="max-w-screen-lg p-4 mx-auto flex flex-col
 justify-center w-full h-full"> 
    <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4
         border-gray-500">Portifolio</p>
    </div>
  
    <div className="grid sm:grid-cols-2 md:grid-cols-3 pag-8
    px-12 sm:px-0">
          {
        portifolio.map(({id,src})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"
            />
            {/* <img src={img4} alt="" /> */}
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">Code</button>
            </div>
        </div>
        ))
    }
        
    </div>
</div>
    </div>
  )
}

export default Portifolio