import websiteImg1 from '../assets/dbm.png';
import websiteImg2 from '../assets/flowers-ecommerce.jpg';
import websiteImg3 from '../assets/code.jpg';
import websiteImg4 from '../assets/bus.jpg'

export default function projects(){
    const config ={
        projects :[
            {
                image: websiteImg1,
                description:'Data-Breach Monitoring using machine learning.',
                link:'https://github.com/Vicky2242/Data_Breach_Monitoring'
            },
            {
                image: websiteImg2,
                description:'Ecommerce website especial for selling Flowers and trees, Built with Html5 and Css',
                link:'https://github.com/Vicky2242/E-commerce_flower_shop_Website_Design'
            },
            {
                image: websiteImg3,
                description:'Virtualar Built with React Js and Tailwind',
                link:'https://github.com/Vicky2242/virtualr'
            },
            {
                image: websiteImg4,
                description: 'Online bus ticket booking system using HTML5, CSS, JavaScript, SQL, and PHP.',
                link:'https://github.com/Vicky2242/Online_Bus_Ticket_Booking_System'
            }
        ]
    }

    return<section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10">
            <h1 className="text-4xl border-b-4 border-[#2b2d77] mb-5 w-[135px] font-bold">Projects</h1>
            <p>These are some of my projects. I have built these with React, MERN and TailWindCSS Check them OUT! </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row  p-10 gap-5'>
                {config.projects.map((projects) => (
                    <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={projects.image} />
                    <div className='projects-desc'>
                    <p className='text-center px-5 py-5'>{projects.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={projects.link}>View Projects</a>
                        </div>
                    </div>
                </div>
                 ))}
                
            </div>   
        </div>
    </section>
}