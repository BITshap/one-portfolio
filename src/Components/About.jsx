import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="hidden md:flex text-4xl font-bold border-b-4 border-gray-500">About</p>
            </div>
        
        <p className="text-xl mt-20">
        Nick Shapoff is an ambitious individual who constantly strives to be the best vehicle for himself and others around him. He has many passions including reading, writing, and fine art as indulging in them tends to provide fresh perspectives that he can apply towards other areas of his life. While his passions describe him, software development defines him as the idea of creating software for others to live better lives gives Nick a greater sense of purpose.
        </p>
        <br />
        <p className="text-xl">
        While Nick possesses a deep affection towards writing about people and events, he can find jotting about himself quite challenging due to his complex makeup. So, like Ringo from the Beatles, he needed to get by with a little help from his friends. When he asked close ones to formulate three words to describe him, he was often deemed as disciplined, driven, open-minded, courageous, innovative, and caring. Each time he smiled and thought to himself “If only I could showcase how grateful I am to have someone like you in my life.” Maybe they were just being kind, although that’s what friends are for! Currently, Nick’s goal is to join a team that is creative, hardworking, and excited to make amazing products for others. 
        </p>
        </div>
    </div>
  )
}

export default About