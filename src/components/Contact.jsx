import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black
    to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center
         max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">Contact</p>
                <p className="py-6">I've got all you need. Get in touch with me for more info</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/2f8fce26-dd7d-40e8-9808-b0f1b8052ec7" 
                method="POST"
                className="flex flex-col w-full md:w-1/2">
                    <div className="w-full">
                    <input type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none"
                    required
                    />

                   <input type="text"
                    name="email"
                    placeholder="Enter your email"
                    className=" my-4 p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none"
                    required
                    />
                    </div>
                    

                    <textarea
                    name="message"
                    rows="10"
                    placeholder="Enter your message "
                    className="p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none"
                     required

                     ></textarea>
                     <button className="text-white bg-gradient-to-b
                     from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                      items-center rounded-md hover:scale-110 duration-300">let's talk</button>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact