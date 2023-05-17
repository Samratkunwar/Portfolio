import React, {useRef} from 'react'
import Head  from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import article1 from '../../public/images/articles/What is Redux with easy explanation.png'
import {motion, useMotionValue} from "framer-motion" 
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX)
        y.set(-10)
    }
    
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
                style={{x:x, y:y}}
                whileInView={{opacity:1, transition:{duration: 0.2}}}
                ref={imgRef} 
                src={img} 
                alt={title} 
                className="z-10 w-f96 h-auto hidden absolute rounded-lg md:!hidden" 
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw       
                "
            />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once:true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            <MovingImg 
                img={img}
                title={title}
                link={link}
            />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:text-light dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light"></div>

            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          50vw       
                    "
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline sm:text-lg">{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}


const articles = () => {
  return (
    <>
        <Head>
            <title>Samrat Kunwar | Articles Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-fill mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className="pt-16">
                <AnimatedText text="Words can change the world!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                    <FeaturedArticle 
                        img={article1}
                        title="asdfasdf"
                        time="asdsadf"
                        summary="asdfasdf"
                        link=""
                    />
                    <FeaturedArticle 
                        img={article1}
                        title="asdfasdf"
                        time="asdsadf"
                        summary="asdfasdf"
                        link=""
                    />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">All Articles</h2>
                <Article 
                img={article1}
                title="This article is brought to you by square space. A web editing system for your everyday business"
                date="22 March 2023"
                link=""
                />
                <Article 
                img={article1}
                title="This article is brought to you by someone who is writing it."
                date="22 March 2023"
                link=""
                />
                <Article 
                img={article1}
                title="This article is brought to you by someone who is writing it."
                date="22 March 2023"
                link=""
                />
                <Article 
                img={article1}
                title="This article is brought to you by someone who is writing it."
                date="22 March 2023"
                link=""
                />
                <Article 
                img={article1}
                title="This article is brought to you by someone who is writing it."
                date="22 March 2023"
                link=""
                />
            </Layout>
        </main>
    </>
  )
}

export default articles