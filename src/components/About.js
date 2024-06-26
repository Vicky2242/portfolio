import AboutImg from '../assets/about.png';

export default function About(){

    const config = {
        line1: 'Hi, Im Vigneshwaran, a passionate Software Engineer specializing in front-end development with a future goal of becoming a full-stack developer.',
        line2: 'I am proficient in Frontend skills like ReactJS, NodeJS, TailwindCSS, UI/UX design.',
        line3: 'In backend I know Java, Node.Js and MongoDB.',
        line4: 'Through my college projects, I have honed my skills and am eager to contribute to innovative and impactful projects.',

    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[#5551e3] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p> 
            <p className='pb-5'>{config.line3}</p>
            <p className='pb-5'>{config.line4}</p>
            </div>  
        </div>
    </section>
}