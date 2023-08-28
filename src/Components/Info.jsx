import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Info = () => {
  const iphoneRef1 = useRef(null)
  const iphoneRef2 =useRef(null)
  const walletRef =useRef(null)
  const swiftRef =useRef(null)
  const virtualRef =useRef(null)
  const transactionRef =useRef(null)


  useEffect (() => {
    const el = iphoneRef1.current
    const el2 = iphoneRef2.current
    const el3 = walletRef.current
    const el4 = swiftRef.current
    const el5 = virtualRef.current
    const el6 = transactionRef.current
    



    gsap.fromTo(el, {rotation:15}, {rotation: 0, duration:2, scrollTrigger:{
      trigger:el,
      scrub:1
    }
    })

    gsap.fromTo(el2, {rotation:-10}, {rotation: 0, duration:2, scrollTrigger:{
     trigger:el2,
    scrub:1 }
    })

    gsap.fromTo(el3, {opacity:0}, {opacity: 1, duration:4, scrollTrigger:{
      trigger:el3,
     scrub:1, }
     })

     gsap.fromTo(el4, {opacity:0}, {opacity: 1, duration:4, scrollTrigger:{
      trigger:el4,
     scrub:1 }
     })

     gsap.fromTo(el5, {opacity:0}, {opacity: 1, duration:4, scrollTrigger:{
      trigger:el5,
     scrub:1 }
     })

     gsap.fromTo(el6, {opacity:0}, {opacity: 1, duration:4, scrollTrigger:{
      trigger:el6,
     scrub:1 }
     })
   

  },[])


  return (
    <div className='h-screen p-2 w-screen bg-[color:var(--secondary-color)] flex justify-center items-center text-white text-right font-inter relative sm:leading-8'>
      <div lassName='h-screen p-2  relative'>

        <p id='swiftPay' ref={swiftRef} className='text-[12px] md:text-[15px] lg:text-[18px] absolute right-[60%] bottom-[17%] sm:right-[62%] md:bottom-[5%] lg:bottom-[10%] z-40 w-[80%] sm:w-[100%] break-normal  sm:leading-8'>
            <span className='text-[20px] sm:text-[25px] text-bold font-interHead'>Swift Pay</span><br/> Make POS payments with   <br/>your smart phone
          </p>

          <p id='wallet' ref={walletRef} className='-rotate-90 sm:rotate-0 text-[12px] sm:text-right text-left md:text-[15px] lg:text-[18px] absolute right-[50%] md:right-[80%] lg:right-[72%] bottom-[72%] lg:bottom-[63%] w-[80%] sm:w-[100%] break-normal z-40  sm:leading-8'>
            <span className='text-[20px] sm:text-[25px] text-bold font-interHead'>Wallet</span><br/> Acess all your cards in a <br/>secured virtual wallet
          </p>

          <p id='virtualCard'ref={virtualRef}  className='text-[12px]  md:text-[15px] lg:text-[18px]  text-left absolute md:left-[70%] lg:left-[75%] left-[55%] bottom-[74%] lg:bottom-[63%] w-[80%] sm:w-[100%] break-normal  z-40  sm:leading-8'>
            <span className='text-[20px] sm:text-[25px] text-bold font-interHead'>Virtual Card</span><br/> Get a free Swift virtual wallet<br/>after registering
          </p>
          
          <p id='transactions' ref={transactionRef} className=' text-[12px]  md:text-[15px] lg:text-[18px]  text-left absolute  bottom-[22%] left-[55%] md:left-[65%] lg:left-[70%] md:bottom-[6%] lg:bottom-[10%] z-40 w-[80%] sm:w-[90%] break-normal  sm:leading-8'>
            <span className='text-[20px] sm:text-[25px] text-bold font-interHead'>Transactions</span><br/> Perform basic bank transactions <br/>with Swift Account
          </p>

      </div>
        


        <div className='w-[80vh] h-[45%] flex relative'>

          
          <img loading='lazy' className='absolute left-[82%] w-[50px] sm:w-[150px] top-[10%] z-20' src="/Assets for Swiftpocket/arrow TopRight.png" alt="" />
          <img loading='lazy' className='absolute top-[67%] left-[80%] md:top-[75%] lg:top-[70%] md:left-[75%] lg:left-[80%] w-[50px] sm:w-[150px] z-20 lg:rotate-0 rotate-[30deg] ' src="/Assets for Swiftpocket/arrowBottomRight.png" alt="" />

            <img loading='lazy' ref={iphoneRef1} className='absolute left-[20%] z-10 ' src="/Assets for Swiftpocket/mockups/Landing1.png" alt="iphoneLandingPage" />
            <img loading='lazy' ref={iphoneRef2} className='absolute right-[15%] bottom-[10%]  z-10' src="/Assets for Swiftpocket/mockups/landing2.png" alt="iphoneLandingPage" />

          <img loading='lazy' className='absolute right-[77%] bottom-[35%] w-[50px] sm:top-[10%] sm:w-[150px] z-20' src="/Assets for Swiftpocket/arrowTopLeft.png" alt="" />
          <img loading='lazy' className='absolute left-[32%] bottom-[2%] sm:left-[28%] sm:top-[75%] w-[50px] sm:w-[150px] z-20' src="/Assets for Swiftpocket/arrowLeftBottom.png" alt="" />

          <div className='w-[195px] h-[454px] sm:w-[395px] sm:h-[454px] absolute z-0 top-[25%] sm:top-0 left-[25%]'>
              <svg width="" height="" viewBox="0 0 395 454" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_1769_9603)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.113331 245.495C0.814988 189.11 55.9822 154.768 90.4766 110.16C121.338 70.249 138.633 11.5975 188.209 2.24592C237.77 -7.10283 279.886 34.6867 318.484 67.1507C352 95.3405 379.339 129.053 389.598 171.629C400.436 216.608 393.972 261.928 375.655 304.414C351.774 359.806 328.868 424.056 272.044 444.297C210.374 466.263 139.627 445.946 86.7788 407.31C35.4296 369.77 -0.678147 309.099 0.113331 245.495Z" fill="black"/>
              </g>
              <defs>
              <filter id="filter0_b_1769_9603" x="-19.8994" y="-19.0859" width="434.771" height="492.418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1769_9603"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1769_9603" result="shape"/>
              </filter>
              </defs>
              </svg>
          </div>

        </div>


    </div>
  )
}

export default Info