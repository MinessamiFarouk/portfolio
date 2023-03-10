import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import Image from 'next/image'
import farouk from '../public/img/farouk.png'
import design from '../public/img/design.png'
import code from '../public/img/code.png'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Minessami Farouk Portfolio</title>
        <meta name="description" content="Generated by next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-50 px-10 py-10 md:px-20 dark:bg-gray-900 lg:px-40'>
        {/* section one */}
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between items-center'>
            <h1 className='text-xl font-burtons dark:text-gray-300'>DevelopedBy</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-xl cursor-pointer dark:text-zinc-300'/></li>
              <li><a href="/asset/Farouk Minessami - Full Stack Developer.pdf" target="_blank" rel="noopener noreferrer" download className='bg-gradient-to-r from-zinc-500 to-orange-400 text-white py-2 px-4 rounded-xl ml-10 cursor-pointer font-burtons'>Resume</a></li>
            </ul>
          </nav>
          <div className='p-4 mx-auto flex flex-col justify-between lg:flex-row items-center'>
            <div className='p-1 mb-12 lg:mb-0'>
              <h1 className='text-4xl font-medium text-zinc-600 py-2 dark:text-gray-300 md:text-6xl'>Minessami Farouk</h1>
              <h2 className='text-3xl text-orange-400 py-2 font-burtons md:text-4xl'>Full Stack Developer</h2>
              <p className='text-md text-gray-800 leading-8 tracking-wider py-2 dark:text-gray-500 md:text-xl max-w-xl'>
                With more than 1+ years of experience in web development and software development, this is what I do every day.<br />
                I have honed my skills through diverse projects and internships, and I'm a quick learner who's always eager to try new technologies. <br />
                I work with this frameworks [<span className='text-orange-400 font-burtons'>Express in Node.js</span>, <span className='text-orange-400 font-burtons'>React in JavaScript</span>, and <span className='text-orange-400 font-burtons'>Laravel in PHP</span>], and have experience with databases such <span className='text-orange-400 font-burtons'>MySQL</span> and <span className='text-orange-400 font-burtons'>MongoDB</span>. <br />
                i can help you to bring your tech vision to life? Let's connect and make it happen.
              </p>
            </div>
            <div className='relative bg-gradient-to-b from-gray-300 rounded-full w-64 h-64 overflow-hidden md:w-96 md:h-96'>
              <Image src={farouk} className="object-contain" fill alt='MinessamiFarouk'/>
            </div>
          </div>
          <div className='flex mx-auto mb-20 justify-center gap-16 text-4xl py-4 text-orange-400'>
            <a href="https://www.linkedin.com/in/farouk-minessami/?locale=en_US" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/MinessamiFarouk" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="mailto:farouk.minessami1@gmail.com" target="_blank" rel="noreferrer"><AiFillMail /></a>
          </div>
        </section>
        {/* section two */}
        <section>
          <div className='p-8'>
            <h3 className='text-3xl font-medium text-zinc-600 py-1 dark:text-gray-500'>Services I Offer :</h3>
            <p className='text-md py-2 dark:text-gray-300 leading-10'>
              Since the beginning of my journey as a full stack developer,
              I worked with <span className="text-orange-400 font-burtons">agencies</span> and <span className="text-orange-400 font-burtons">startups</span> to create <span className="text-orange-400 font-burtons">digital products</span> for businesses and consumers.
            </p>
            <p className='text-md py-2 dark:text-gray-300'>
              I offer from a wide range of services, including <span className="text-orange-400 font-burtons">Front-End Architecture</span> and, <span className="text-orange-400 font-burtons">Back-End Architecture </span>. and Create, Mange <span className="text-orange-400 font-burtons">Databases</span>.
            </p>
          </div>
          <div className='flex flex-col items-center mt-20 md:flex-row gap-14 justify-center md:items-start'>
            <div className='bg-gray-100 shadow-lg p-5 rounded-xl w-80 dark:bg-gray-800 lg:w-96'>
              <Image src={design} width={100} height={100} alt="design"/>
              <h3 className="text-gray-800 uppercase text-lg font-medium pt-8 pb-2 dark:text-zinc-300">
                Front End (Beautiful UI/UX)
              </h3>
              <p className="py-2 dark:text-gray-500">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="text-xl uppercase py-4 text-zinc-600 font-burtons dark:text-gray-300">Technologie i use :</h4>
              <p className="text-orange-400 py-1 font-burtons">Sass</p>
              <p className="text-orange-400 py-1 font-burtons">Tailwind</p>
              <p className="text-orange-400 py-1 font-burtons">React <span className='text-black dark:text-zinc-300'>~</span> Next</p>
              <p className="text-orange-400 py-1 font-burtons">TypeScript</p>
              <p className="text-orange-400 py-1 font-burtons">WordPress</p>
            </div>

            <div className='bg-gray-100 shadow-lg p-5 rounded-xl w-80 dark:bg-gray-800 lg:w-96'>
              <Image src={code} width={100} height={100} alt="programming"/>
              <h3 className="text-gray-800 uppercase text-lg font-medium pt-8 pb-2 dark:text-zinc-300">
                Back End (Logic and Architecture)
              </h3>
              <p className="py-2 dark:text-gray-500">
                Creating neat code base on the logic and the architecture.
              </p>
              <h4 className="text-xl uppercase py-4 text-zinc-600 font-burtons dark:text-gray-300">Technologie i use :</h4>
              <p className="text-orange-400 py-1 font-burtons">Laravel</p>
              <p className="text-orange-400 py-1 font-burtons">Express</p>
              <p className="text-orange-400 py-1 font-burtons">MongoDb</p>
              <p className="text-orange-400 py-1 font-burtons">MYsql</p>
              <p className="text-orange-400 py-1 font-burtons">Rest Api <span className='text-black dark:text-zinc-300'>~</span> GraphQl</p>
              <p className="text-orange-400 py-1 font-burtons">WordPress</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
