import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../Components/Experience'
import Nav from '../Components/Nav'
import Info from '../Components/Info'
import POS from '../Components/POS'
import DownloadApp from '../Components/DownloadApp'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import { Loader } from '@react-three/drei'

const Home = () => {
  return (
    <div id='home'>
        <Nav/>
        <div id='hero' className='flex flex-col sm:flex-row sm:pl-[15%] pl-[10%] sm:pr-[5%] pr-[10%] h-screen w-[100vw]'>
            <div className='sm:w-[50vw] h-[90%] sm:h-[100%] flex justify-start items-center'>
                <div className='sm:w-[554px] sm:h-[115px] w-[100%] flex flex-col gap-[20px]'>
                  <h1 className='font-bold text-[40px] font-interHead'>Elevate Your Payment Experience With <span className='text-[color:var(--primary-color)]'>Swift</span><span className='text-[#33db0a]' >Cash</span> </h1>
                  <p className="text-wrapper text-[95%]">
                     Save all your cards in a secured virtual wallet and enjoy contactless payment with just your phone.
                  </p>
                  <div className='flex gap-[30px] h-fit  text-white'>
                    <button id='playstore' className='flex justify-center items-center gap-[10px] bg-[color:var(--alternate-primary-color)] p-[10px] sm:p-[12px] sm:w-[200px] h-fit w-fit rounded-[10px]'>
                        <span className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'>
                            <svg width="" height="" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7279 17.0352L6.20898 28.2502C6.57732 29.5004 7.75315 30.4567 9.15069 30.4567C9.73861 30.4567 10.2536 30.3093 10.6949 30.0154L23.5653 22.7344L17.7279 17.0352Z" fill="#E6E6E6" stroke="#82B840" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29.0061 14.3541L23.4911 11.1921L17.7274 17.0387L23.564 22.738L29.0805 19.6496C30.0368 19.1347 30.6984 18.1055 30.6984 17.0019C30.6247 15.8983 29.9624 14.8691 29.0061 14.3541ZM6.20843 5.75C6.13477 5.97029 6.13477 6.26496 6.13477 6.55892V27.5185C6.13477 27.8125 6.13477 28.0335 6.20843 28.3274L17.7274 17.0387L6.20843 5.75Z" fill="#E6E6E6"/>
                            <path d="M17.7274 17.0387L23.4911 11.1921L29.0061 14.3541C29.9624 14.8691 30.6247 15.8983 30.6984 17.0019C30.6984 18.1055 30.0368 19.1347 29.0805 19.6496L23.564 22.738L17.7274 17.0387ZM17.7274 17.0387L6.20843 28.3274C6.13477 28.0335 6.13477 27.8125 6.13477 27.5185V6.55892C6.13477 6.26496 6.13477 5.97029 6.20843 5.75L17.7274 17.0387Z" stroke="#82B840" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.7279 17.0381L23.4916 11.1916L10.7685 3.98426C10.3279 3.6903 9.74003 3.54297 9.15069 3.54297C7.75315 3.54297 6.50294 4.49922 6.20898 5.74943L17.7279 17.0381Z" fill="#E6E6E6" stroke="#82B840" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>

                        <p className=' sm:w-[80%] text-left sm:text-[100%] text-[80%] h-fit'>Download on <span className='font-bold block sm:text-[22px] font-interHead'>Play Store</span></p>
                    </button>

                    <button id='appstore' className='flex justify-center items-center gap-[10px] bg-[color:var(--secondary-color)] p-[10px] sm:p-[12px] sm:w-[200px] h-fit  w-fit rounded-[10px]'>
                        <span className=' w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'>
                            <svg width="" height="" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.1545 28.73C22.7661 30.0758 21.2503 29.8633 19.7911 29.2258C18.247 28.5742 16.8303 28.5458 15.2011 29.2258C13.1611 30.1042 12.0845 29.8492 10.8661 28.73C3.95281 21.6042 4.97281 10.7525 12.8211 10.3558C14.7336 10.455 16.0653 11.4042 17.1845 11.4892C18.8561 11.1492 20.457 10.1717 22.242 10.2992C24.3811 10.4692 25.9961 11.3192 27.0586 12.8492C22.6386 15.4983 23.687 21.3208 27.7386 22.95C26.9311 25.075 25.8828 27.1858 24.1403 28.7442L24.1545 28.73ZM17.0428 10.2708C16.8303 7.11167 19.3945 4.505 22.3411 4.25C22.752 7.905 19.0261 10.625 17.0428 10.2708Z" fill="#E6E6E6"/>
                            </svg>

                        </span>

                        <p className='sm:w-[80%] text-left sm:text-[100%] text-[80%] '>Download on <span className='font-bold sm:text-[22px] font-interHead block'>App Store</span></p>
                    </button>

                  </div>

                </div>
            </div> 

            <div className='hidden lg:flex  md:w-[50vw]'>
                <Canvas
                
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 2000,
                        position: [ -3, 1.5, 4 ]
                    } }
                >
                    <Suspense fallback={null}>

                         <Experience/>
  
                    </Suspense>
                </Canvas>
                <Loader/>

            </div>
        </div>

    <Info/>
    <POS/>
    <DownloadApp/>
    <FAQ/>
    <Footer/>
      

    </div>
  )
}

export default Home