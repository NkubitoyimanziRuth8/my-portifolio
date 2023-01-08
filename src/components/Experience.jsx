import React from 'react'
import img5 from "../images/react.jpg"
import img6  from "../images/css.jpg"
import img7  from "../images/tail.jpg"
import img8  from "../images/js.png"

const Experience = () => {
    const techs = [
        {
            id:1,
            src:img5,
            title:'react',
            style:'shadow-blue-500'

        },
        {
            id:2,
            src:img6,
            title:'css',
            style:'shadow-blue-500'

        },
        {
            id:3,
            src:img7,
            title:'tailwind',
            style:'shadow-blue-500'

        },
        {
            id:4,
            src:img8,
            title:'javascrit',
            style:'shadow-blue-500'

        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full
     h-screen"
     >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justfy-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experince</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0" >
                 {
                     techs.map(({id,src,title,style})=>(
                        <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 round-lg ${style}`}>
                    
                   <img src={img5} alt=""   className="w-20 mx-auto"/> 
                   <p className="mt-4">{title}</p>
                </div>
                     ))
                    }
                
            </div>
        </div>
    </div>
  )
}

export default Experience