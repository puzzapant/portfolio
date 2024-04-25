
import pooja from '../assets/pooja.jpeg';

const About =()=>{
    return(
        <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
         
         <div className="md:grid md:grid-cols-2 sm:py-16">

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0 '>
            <div className="my-auto mx-6">
             <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
             <p className="text-base lg:text-lg">Hello! I'm Pooja Pant, a frontend developer passionate about crafting engaging digital experiences. With proficiency in React, HTML, CSS, and JavaScript, I specialize in creating dynamic and visually appealing websites. My toolkit also includes Tailwind CSS for efficient styling and layout. Through hands-on experience and a portfolio of projects, I've honed my skills in transforming ideas into polished, user-friendly interfaces. Let's build something amazing together!
             </p>
            </div>
            </div>
             

            <img src={pooja} alt="about me" className="mx-auto rounded-3xl py-8 md:py-0"  />
             
         </div>
        </div>
    )
}
export default About