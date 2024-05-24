import { LiaLinkedin } from 'react-icons/lia';
import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
export default function Hero(){

    const Config ={
        subtitle : 'Im a Front-end developer and UI/UX Designer',
        social: {
            twitter:'https://x.com/Vickynvirt1907',
            linkedin:'https://www.linkedin.com/in/vigneshwaran-r-3b14761b1/',
            github:'https://github.com/Vicky2242'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='w-1/2 flex flex-col'>
            <h1 className='md:w-1/2 text-white text-5xl font-hero-font'>Hi, <br/> I'm Vigneshwaran
            <p className='text-2xl'>{Config.subtitle}</p>
            </h1>
        <div className='flex py-10'>
        <a href={Config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
        <a href={Config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href={Config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>

       </div>
    </div>  
    <img className='md:w-1/3' src={HeroImg} />
    </section>
}