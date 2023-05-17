import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

const spH2div_style = 'flex flex-col items-end justify-center xl:items-center'
const span_style = 'inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'
const h2_style = 'text-xl font-medium capitalized text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'

const AnimatedNumbers = ({value}) => {
  const ref= useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  },[isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
} 

const biography = {
  
p1:"Hi, I'm Samrat Kunwar, a junior front-end developer and UX/UI designer with a passion for creating beautiful and functional digital experiences. With a degree in Information Technology and a background in design, I brings a unique blend of technical and creative skills to every project.",
p2:"As a front-end developer, I has a strong understanding of HTML, CSS, and JavaScript and is always eager to learn new technologies and techniques. I has experience working with popular front-end frameworks like React and Vue.js and is proficient in using version control systems like Git.",
p3:"In addition to my technical skills, I has a keen eye for design and a deep understanding of user experience principles. I'm passionate about creating intuitive and user-friendly interfaces that delight users and solve real-world problems. My design skills include expertise in Adobe Creative Suite, Figma and Sketch, and I also has experience creating wireframes, mockups, and prototypes.",
p4:"With a collaborative and detail-oriented approach, I am dedicated to delivering high-quality work that meets the needs of clients and users alike. Whether I'm working on a web application or a mobile app, I'm committed to creating engaging and accessible digital experiences that make a difference in people's lives.",
p5:"When I'm not coding or designing, you can find me hiking in the great outdoors or exploring the latest museums and galleries."
}

const about = () => {
  return (
    <>
      <Head>
        <title>Samrat Kunwar | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>{biography.p1}</p>
              <p className='font-medium my-4'>{biography.p2}</p>
              <p className='font-medium'>{biography.p3}</p>
              <p className='font-medium my-4'>{biography.p4}</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={profilePic} alt="Profile picture" className='w-full h-auto rounded-2xl' 
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw       
                "
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className={spH2div_style}>
                <span className={span_style}><AnimatedNumbers value={15} />+</span>
                <h2 className={h2_style}>Projects Completed</h2>
              </div>
              <div className={spH2div_style}>
                <span className={span_style}><AnimatedNumbers value={5} />+</span>
                <h2 className={h2_style}>Frameworks learned</h2>
              </div>
              <div className={spH2div_style}>
                <span className={span_style}><AnimatedNumbers value={3} />+</span>
                <h2 className={h2_style}>years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about