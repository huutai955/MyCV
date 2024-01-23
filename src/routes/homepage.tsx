import { useEffect, useState, useRef } from 'react'
import { AiOutlineGithub, AiFillInstagram, AiFillFacebook, AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { Drawer } from 'antd';
import ScrollToTop from 'react-scroll-to-top';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';





function HomePage() {
  const [opacity, setOpacity] = useState<number>(1)
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number>(1)
  const elementRefAbout = useRef<HTMLDivElement>(null)
  const elementRefWork = useRef<HTMLDivElement>(null)
  const elementRefContact = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const scrollToElement = (element: any) => {
    element.current?.scrollIntoView()
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const changeHeight = (e: Event) => {
    setHeight(window.scrollY)
  }

  useEffect(() => {
    if (height >= 100) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }
  }, [height])
  useEffect(() => {
    window.addEventListener('scroll', changeHeight)
    return () => {
      window.removeEventListener('scroll', changeHeight);
    }
  }, [])


  return (
    <>
      <div className="header relative bg-navy  py-5">
        <div className="container flex justify-between px-12  max-[768px]:flex-row-reverse">
          <h2 className='font-serif text-3xl text-grey-custom'>Portfolio</h2>
          <span className='text-3xl cursor-pointer 768px:hidden' onClick={showDrawer}><AiOutlineMenuUnfold /></span>
          <ul className='flex gap-8 max-[768px]:hidden'>
            <Fade triggerOnce={true} direction='down' delay={100}>
              <li className='font-normal cursor-pointer text-grey-custom hover:text-hover-color duration-700' onClick={() => {
                scrollToElement(elementRefAbout)
              }}><span>About</span></li>
            </Fade>
            <Fade triggerOnce={true} direction='down' delay={300}>
              <li className='font-normal cursor-pointer text-grey-custom hover:text-hover-color duration-700' onClick={() => {
                scrollToElement(elementRefWork)
              }}><span>Work</span></li>
            </Fade>
            <Fade triggerOnce={true} direction='down' delay={500}>
              <li className='font-normal cursor-pointer text-grey-custom hover:text-hover-color duration-700' onClick={() => {
                scrollToElement(elementRefContact)
              }}><span>Contact</span></li>
            </Fade>
            <Fade triggerOnce={true} direction='down' delay={700}>
              <li className='font-normal cursor-pointer text-grey-custom hover:text-hover-color duration-700'><a href='https://www.topcv.vn/xem-cv/V1NRA1kGVlAOUlUGDVMAAlZUAgcHVVNUV1sNUQadb1' target={'_blank'} className='font-normal cursor-pointer text-grey-custom hover:text-hover-color duration-700'>Remuse</a></li>
            </Fade>
          </ul>
        </div>
      </div>

      <div className="bg-dark-navy py-20 px-24 max-[768px]:px-2">
        <div className="container max-[768px]:px-2 flex items-center max-[992px]:flex-col">
          <div className='basis-3/4'>
            <Fade triggerOnce={true} delay={200}>
              <p className='text-hover-color mb-6 max-[768px]:max-w-xs  '>Hi, my name is</p>
            </Fade>
            <Fade triggerOnce={true} delay={800}>
              <h2 className='text-grey-custom text-6xl mb-4  '>Nguyen Huu Tai.</h2>
            </Fade>
            <Fade triggerOnce={true} delay={1300}>
              <h2 className='text-grey-custom2 text-5xl mb-4 max-[680px]:text-4xl '>I am Front-end Developer.</h2>
            </Fade>
          </div>
          <div className='basis-1/4 text-center max-[992px]:w-64'>
            <Slide triggerOnce={true} direction='right'>
              <img className='w-full brightness-50 hover:brightness-75 cursor-pointer duration-700 rounded-md' src="./img/avatar.jpg" alt="" />
              <a href='./filecv/CV_Nguyen_Huu_Tai.pdf' target={'_blank'} download className='text-dark-navy font-bold inline-block mt-5 border-2 py-3 px-2 rounded-xl bg-grey-custom2 hover:bg-grey-custom duration-700'>
                Check Out My CV
              </a>
            </Slide>
          </div>
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} closeIcon={false} open={open} style={{ background: '#020c1b', color: '#fff' }}>
        <span className='text-4xl flex justify-end' onClick={onClose}><AiOutlineClose /></span>
        <ul className='flex flex-col gap-8 items-center'>
          <li> <a href=""><span className='text-grey-custom text-2xl'>About</span></a></li>
          <li> <a href=""><span className='text-grey-custom text-2xl'>Work</span></a></li>
          <li> <a href=""><span className='text-grey-custom text-2xl'>Contact</span></a></li>
          <li> <a href=""><span className='text-grey-custom text-2xl'>Remuse</span></a></li>
        </ul>
      </Drawer>

      <div ref={elementRefAbout} className="aboutme bg-dark-navy pb-24 px-24 max-[768px]:px-2">
        <div className="container max-[768px]:px-2">
          <Fade triggerOnce={true} delay={1700}>
            <h2 className='text-grey-custom text-2xl font-bold'>About Me</h2>
            <p className='text-grey-custom2 text-lg mb-5'>Hello! My name is Nguyễn Hữu Tài, I am 22 years old. I have started to know about information technology since 09/2021. In the learning process, I began to know about web development and I have learned about it for about 8 - 9 months. From April 2023 to now, I am developer at unikcore as front end developer.</p>
            <p className='text-grey-custom2 text-lg mb-5'>These are a few technologies related to Front-end I have learned since 2022 now.</p>
            <div className='flex'>
              <ul className='basis-1/3 text-ce'>
                <li className='text-grey-custom mb-2'>Javascript</li>
                <li className='text-grey-custom mb-2'>TypeScript</li>
                <li className='text-grey-custom mb-2'>ReactJS</li>
                <li className='text-grey-custom mb-2'>NextJS</li>
                <li className='text-grey-custom mb-2'>Redux (Redux-toolkit)</li>
                <li className='text-grey-custom mb-2'>Tanstack Query</li>
              </ul>
              <ul className='basis-1/3 text-ce'>
                <li className='text-grey-custom mb-2'>Bootstrap</li>
                <li className='text-grey-custom mb-2'>SASS</li>
                <li className='text-grey-custom mb-2'>Tailwind</li>
                <li className='text-grey-custom mb-2'>ANTD</li>
                <li className='text-grey-custom mb-2'>Marterial UI</li>
              </ul>
            </div>
            <p className='text-grey-custom2 text-lg mb-5'>These are a few technologies related to Back-end I have learned since August 2023 now to build a REST API.</p>
            <div className='flex mb-3'>
              <ul className='basis-1/3 text-ce'>
                <li className='text-grey-custom mb-2'>ExpressJS</li>
                <li className='text-grey-custom mb-2'>Sequelize</li>
                <li className='text-grey-custom mb-2'>My SQL</li>
                <li className='text-grey-custom mb-2'>JWT</li>
              </ul>
            </div>
            <h2 className='text-grey-custom text-2xl font-bold'>Experience</h2>
            <p className='text-grey-custom2'>Front-end Developer at UnikCore Company (Full-time). From April 2023 to now.</p>

          </Fade>
        </div>
      </div>
      <div ref={elementRefWork} className="myproject bg-dark-navy py-24  px-24 max-[992px]:p-0">
        <div className="container max-[680px]:px-3">
          <h2 className='text-3xl font-bold text-grey-custom2 mb-7'>Some Thing I've Build</h2>
          <div className="project1 flex relative mb-40 items-center py-24">
            <Slide direction='left' className='basis-2/3 relative max-[992px]:basis-full'>
              <div className='cursor-pointer' onClick={() => {
                navigate('/project')
              }}>
                <img src="./img/pho1.jpg" className='max-[680px]:h-400px' alt="" />
                <a target={'_blank'} className='absolute top-0 right-0 left-0 bottom-0 opacity-70 hover:opacity-0 duration-700 max-[992px]:hidden' style={{ backgroundColor: '#1d4652' }}></a>
                {/* Mobile */}
                <a href='https://vercel.com/huutai955/nguyen-huu-tai-bootcamp33-typescript-capstone' target={'_blank'} className='absolute bg-navy hidden top-0 bottom-0 right-0 left-0 max-[992px]:block p-2'>
                  <p className='text-hover-color'>Featured Project</p>
                  <h2 className='text-grey-custom text-2xl'>Unikcore Project</h2>
                  <p className='text-grey-custom2'>This is the first real-world project I have ever worked on. It is a product created to manage sales, marketing, and customer care systems for various industries. <Link to={'/project'}>Click here for more information</Link></p>
                  <h2 className=' 992px:text-base 1024px:text-xl font-medium text-grey-custom'>A few libraries and frameworks that I use in this project: </h2>
                  <div className='flex 1024px:justify-start 992px:justify-end'>
                    <ul className='basis-1/3'>
                      <li className='text-grey-custom'>ReactJS</li>
                      <li className='text-grey-custom'>Antd</li>
                      <li className='text-grey-custom'>Sass</li>
                      <li className='text-grey-custom'>TypeScript</li>
                    </ul>
                    <ul className='basis1/3'>
                      <li className='text-grey-custom'>Redux (Redux-toolkit)</li>
                      <li className='text-grey-custom'>Axios</li>
                      <li className='text-grey-custom'>Formik and Yup</li>
                    </ul>
                  </div>
                </a>
              </div>
            </Slide>
            <Slide className='basis-1/3 absolute right-0 max-[992px]:hidden' direction='right'>
              <div>
                <p className='text-hover-color text-end'>Featured Project</p>
                <h2 className='text-grey-custom text-2xl text-end'>Unikcore Project</h2>
                <div className='p-4 992px:w-4/5 992px:relative 992px:left-1/4 992px:text-xs 1024px:left-0 1024px:w-full' style={{ backgroundColor: '#112240', boxShadow: '0 10px 30px -15px var(--navy-shadow)' }}>
                  <p className='text-grey-custom2 max-w-md  992px:text-xs 1024px:text-lg'>This is the first real-world project I have ever worked on. It is a product created to manage sales, marketing, and customer care systems for various industries. <Link to={'/project'}>Click here for more information</Link></p>
                </div>
                <h2 className='text-end 992px:text-base 1024px:text-xl font-medium text-grey-custom'>A few libraries and frameworks that I use in this project: </h2>
                <div className='flex 1024px:justify-start 992px:justify-end'>
                  <ul className='basis-1/3'>
                    <li className='text-grey-custom'>NextJS</li>
                    <li className='text-grey-custom'>Redux (Redux-toolkit)</li>
                    <li className='text-grey-custom'>Tanstack Query</li>
                    <li className='text-grey-custom'>Antd</li>
                    <li className='text-grey-custom'>TailwindCSS</li>
                    <li className='text-grey-custom'>React BeautifulDND</li>
                  </ul>
                  <ul className='basis1/3'>
                    <li className='text-grey-custom'>SASS</li>
                    <li className='text-grey-custom'>Formik</li>
                    <li className='text-grey-custom'>Yup</li>
                    <li className='text-grey-custom'>DayJS</li>
                    <li className='text-grey-custom'>React ChartJS</li>
                  </ul>
                </div>
              </div>
            </Slide>
          </div>


        </div>
      </div>



      <div ref={elementRefContact} className="contact bg-dark-navy px-24 max-[768px]:px-2">
        <div className="container max-[768px]:px-2 text-grey-custom text-end" >
          <h2 className='text-3xl font-bold mb-5'>Contact</h2>
          <p>You can contact to me through:</p>
          <ul>
            <li>Phone number: 086096165</li>
            <li>Email: tainguyen201507021@gmail.com</li>
            <li>Address: Tam Phu ward, Thu Duc district, Ho Chi Minh city</li>
          </ul>
        </div>
      </div>


      <div className="thanks bg-dark-navy py-24">
        <div className="container">
          <h2 className='text-grey-custom text-2xl text-center'>Many thanks to Brittany Chiang for the design</h2>
        </div>
      </div>

      <ScrollToTop smooth style={{ right: 100 }} className="max-[768px]:hidden
      "/>
      <div className="social flex flex-col items-center fixed left-10 bottom-0 after:content-[''] after:h-28 after:w-1 after:bg-grey-custom2 max-[992px]:hidden">
        <a href="https://github.com/huutai955" target={'_blank'}><AiOutlineGithub className='text-2xl text-grey-custom2 mb-3' /></a>
        <a href="https://www.instagram.com/ihatetaiiiii0702" target={'_blank'}><AiFillInstagram className='text-2xl text-grey-custom2 mb-3' /></a>
        <a href="https://www.facebook.com/tainguyen201523" target={'_blank'}><AiFillFacebook className='text-2xl text-grey-custom2 mb-3' /></a>
      </div>
      <div className=" email-contact flex flex-col items-center fixed right-10 bottom-0 after:content-[''] after:h-28 after:w-1 after:bg-grey-custom2 max-[992px]:hidden">
        <a href="mailto:tainguyen201507021@gmail.com" className='mb-2 text-grey-custom2' style={{ writingMode: 'vertical-rl' }}>tainguyen201507021@gmail.com</a>
      </div>
    </>

  )
}

export default HomePage
