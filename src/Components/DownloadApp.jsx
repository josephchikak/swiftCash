import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const DownloadApp = () => {

  const card1ref= useRef(null)
  const card2ref= useRef(null)
  const card3ref= useRef(null)

  useEffect(()=>{
    const el1 = card1ref.current
    const el2 = card2ref.current
    const el3 = card3ref.current

    gsap.fromTo(el1, {rotation:0 , x:0, zIndex:100}, {rotation: -55, x:205, y:-90, zIndex:50, duration:2, delay:2, scrollTrigger:{
      trigger:el1,
      scrub:1
    }})

    gsap.fromTo(el2, {rotation:0, x:0, zIndex:0}, {rotation: -20, x:-200, y:-20, duration:2, delay:2, scrollTrigger:{
      trigger:el2,
      scrub:1
    }})

    gsap.fromTo(el3, {rotation:0, x:0}, {rotation: -35, y:-35, duration:2, delay:2, scrollTrigger:{
      trigger:el3,
      scrub:1
    }})

    // gsap.fromTo(el3, {zIndex:10, x:-200}, { zIndex:100, x:0, duration:2, delay:4, ease:'power.in', scrollTrigger:{
    //   trigger:'#cardBg',
    //   start:'top bottom',
    //   // end: '+=300px',
    //   scrub:1
    // }})
    





  },[])


  return (
    <div id='download' className='text-white w-screen h-[50vh] sm:h-[60vh] flex justify-center items-center p-5 mt-5'>
        <div id='cardBg' className='bg-[color:var(--secondary-color)] w-[90%] h-[80%] rounded-[30px] flex justify-start items-center pl-[5%] pr-[5%]'>
          <div className='' >
            <div className='flex text-[90%] flex-col gap-[15px] justify-start content-center w-[100%]'> 
                <h1 className='sm:text-[32px] md:text-[30px] font-bold font-interHead'>Download SwiftCash Now.</h1>
                <div className='flex gap-[10px] sm:gap-[20px] w-[100%] sm:w-[100%] pb-1'>
                    <button id='playstore' className=' flex justify-center items-center gap-[10px] bg-[color:var(--alternate-primary-color)] p-2 sm:pl-[12px] sm:pr-[12px] sm:pt-[10px] sm:pb-[10px] sm:w-[170px] h-fit sm:h-[65px] w-[100%] rounded-[10px]'>
                          <span className='w-[20px] sm:w-[36px] sm:h-[36px]'>
                              <svg width="" height="" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.7279 17.0352L6.20898 28.2502C6.57732 29.5004 7.75315 30.4567 9.15069 30.4567C9.73861 30.4567 10.2536 30.3093 10.6949 30.0154L23.5653 22.7344L17.7279 17.0352Z" fill="#E6E6E6" stroke="#82B840" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M29.0061 14.3541L23.4911 11.1921L17.7274 17.0387L23.564 22.738L29.0805 19.6496C30.0368 19.1347 30.6984 18.1055 30.6984 17.0019C30.6247 15.8983 29.9624 14.8691 29.0061 14.3541ZM6.20843 5.75C6.13477 5.97029 6.13477 6.26496 6.13477 6.55892V27.5185C6.13477 27.8125 6.13477 28.0335 6.20843 28.3274L17.7274 17.0387L6.20843 5.75Z" fill="#E6E6E6"/>
                              <path d="M17.7274 17.0387L23.4911 11.1921L29.0061 14.3541C29.9624 14.8691 30.6247 15.8983 30.6984 17.0019C30.6984 18.1055 30.0368 19.1347 29.0805 19.6496L23.564 22.738L17.7274 17.0387ZM17.7274 17.0387L6.20843 28.3274C6.13477 28.0335 6.13477 27.8125 6.13477 27.5185V6.55892C6.13477 6.26496 6.13477 5.97029 6.20843 5.75L17.7274 17.0387Z" stroke="#82B840" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17.7279 17.0381L23.4916 11.1916L10.7685 3.98426C10.3279 3.6903 9.74003 3.54297 9.15069 3.54297C7.75315 3.54297 6.50294 4.49922 6.20898 5.74943L17.7279 17.0381Z" fill="#E6E6E6" stroke="#82B840" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>

                          </span>

                          <p className='w-[80%] text-[12px] text-left '>Download on <span className='text-[1.2em]  block font-bold sm:text-[18px] font-interHead'>Play Store</span></p>
                      </button>

                      <button id='appstore2' className='flex justify-center items-center gap-[10px] bg-[color:var(--alternate-secondary-color)] p-2 sm:pl-[12px] sm:pr-[12px] sm:pt-[10px] sm:pb-[10px] sm:w-[170px] h-fit sm:h-[65px] w-[100%] rounded-[10px]'>
                          <span className='w-[20px] sm:w-[36px] sm:h-[36px]'>
                              <svg width="" height="" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24.1545 28.73C22.7661 30.0758 21.2503 29.8633 19.7911 29.2258C18.247 28.5742 16.8303 28.5458 15.2011 29.2258C13.1611 30.1042 12.0845 29.8492 10.8661 28.73C3.95281 21.6042 4.97281 10.7525 12.8211 10.3558C14.7336 10.455 16.0653 11.4042 17.1845 11.4892C18.8561 11.1492 20.457 10.1717 22.242 10.2992C24.3811 10.4692 25.9961 11.3192 27.0586 12.8492C22.6386 15.4983 23.687 21.3208 27.7386 22.95C26.9311 25.075 25.8828 27.1858 24.1403 28.7442L24.1545 28.73ZM17.0428 10.2708C16.8303 7.11167 19.3945 4.505 22.3411 4.25C22.752 7.905 19.0261 10.625 17.0428 10.2708Z" fill="#E6E6E6"/>
                              </svg>

                          </span>

                          <p className='w-[80%] text-[12px] text-left'>Download on <span className='font-bold text-[1.2em] sm:text-[18px] block font-interHead'>App Store</span></p>
                      </button>

                </div>
                <p className='w-[50%] sm:w-[70%]'>Our mobile app is available for everyone and on all smart phones!</p>
            </div>
          </div>

          <div className=' sm:w-[70%] h-[100%] sm:hidden lg:flex flex justify-center'>

            <div className='sm:w-[50%] sm:h-[100%]  relative '>
              <img loading='lazy' ref={card1ref} id='cardBlue' className='absolute w-[100%] top-[80px] left-[140px] z-20  ' src="/Assets for Swiftpocket/mockups/card1.png" alt="card1" />
              <img loading='lazy' ref={card2ref} id='cardBlack'  className='absolute w-[70%] top-[30px] left-[140px] z-0 invisible sm:visible ' src="/Assets for Swiftpocket/mockups/Card2.png" alt="card2" />
              <img loading='lazy'  ref={card3ref} id='cardOrange'  className='absolute w-[85%] top-[30px] left-[140px] z-10 ' src="/Assets for Swiftpocket/mockups/Card3.png" alt="card3" />
            </div>
          </div>


        </div>


    </div>
  )
}

export default DownloadApp