import React, { useRef } from 'react'
import { motion,  useScroll } from 'framer-motion'
import LiIcon from '@/components/LiIcon'

const Details = ({position="", company="", time="", work=""}) => {
   
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justigy-between'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position} &nbsp; <span className='text-primary capitalize dark:text-primaryDark'>@{company}</span></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>{time}</span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div  
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Freelancer Web Developer"
                company="Self-employed"
                time="JAN 2023 - Present"
                work="Working on WordPress based projects for international clients editing and updating themes and plugins while creating social media contents based on supplied materials."
                />
                <Details 
                position="Multimedia Developer"
                company="TAFE Queensland"
                time="APR 2021 - DEC 2023"
                work="Worked on a team responsible for the design, development and integration of multimedia contents for TAFE's student portal using web technologies like HTML, CSS, JQuery and Bootstrap. Also utilized Adobe Creative Software including Photoshop & Illustrator to design, edit and update necessary contents."
                />
                <Details 
                position="Junior Front-end Developer"
                company="Claim App"
                time="MAY 2020 - SEPT 2020"
                work="Worked on a team responsible for the design and development of cross-platform mobile application using ReactJS and Ionic."
                />
                <Details 
                position="Web Developer"
                company="Griffith University"
                time="FEB 2019 - SEPT 2020"
                work="Worked as a UX/UI designer while utilizing Figma and AdobeXD for a team developing a mobile. Designed social media clone and chat system using Angular, NodeJS, ExpressJS, mySQL and mongoDB. Also worked around CMS like Shopify and WordPress to create ecommerce websites for international clients."/>
            </ul>
        </div>
    </div>
  )
}

export default Experience