import React from 'react'
import img3 from "../images/quiz.jpg"
import img4 from "../images/todo.jpg"
import img5 from "../images/signup.jpeg"
// import { Link } from 'react-scroll'

const Portifolio = () => {
    const portifolio =[
        {
            id:1,
            src:img3,
            href:"https://github.com/NkubitoyimanziRuth8/quiz-1"
        },
        {
            id:2,
            src:img4,
            href:"https://github.com/NkubitoyimanziRuth8"
        },
        {
            id:3,
            src:img5,
            href:"https://github.com/NkubitoyimanziRuth8/signupForm"
        },
        {
            id:4,
            src:img4,
            href:"https://www.premierbet.rw/fr/win-bonus-register/?btag=657185_EBF6315BE49447A5B7A277A2DF0F7A8E&PremBet=wa6g5k9j6ro769pl2q15nj9k"
        },
        {
            id:5,
            src:img3,
            href:"https://www.premierbet.rw/fr/win-bonus-register/?btag=657185_EBF6315BE49447A5B7A277A2DF0F7A8E&PremBet=wa6g5k9j6ro769pl2q15nj9k"
        },
    ]
  return (
    <div name="portifolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen"
    >
<div className="max-w-screen-lg p-7 mx-auto flex flex-col
 justify-center w-full h-full"> 
    <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4
         border-gray-500">Portifolio</p>
    </div>
  
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
    px-12 sm:px-0">
          {
        portifolio.map(({id,src,href})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"
            />
            {/* <img src={img4} alt="" /> */}
            <div className="flex items-center justify-center">
                
            <a href={href}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">more
            
            </button>
            </a>
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