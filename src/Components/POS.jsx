import React from 'react'
import { decodeBlurHash } from 'fast-blurhash';

const POS = () => {

  const landingSmall1 =decodeBlurHash('LND,l,WC.TouTejZs:W.xFkBWWah', 32, 32);
  return (
    <div id='POS' className='h-[100vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh] w-screen flex flex-col sm:flex-row '>
        <div className='w-[100vw] sm:w-[50vw] h-[70%] sm:h-[100%] flex gap-10 justify-center items-center sm:pl-[10%] relative mb-10'>
          <div className='flex justify-end flex-col absolute w-[100%]  lg:w-[75%] h-[100%] lg:pl-0 md:pl-[0] pl-[10%] pb-[10%]'>
             <div className='h-[50%]'></div>

              <div className='h-[50%] w-[70%] md:w-[85%] md:pr-[10%] lg:pr-0 ml-[10%] lg:ml-[0] lg:w-[100%] mb-5 lg:-mb-5 z-0'>
                  <svg width="" height="" viewBox="0 0 594 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.8498 123.63C55.9306 84.5152 120.19 75.6152 173.384 49.3957C214.095 29.3289 256.461 58.701 306.097 49.3957C368.97 37.609 432.938 -18.0736 486.18 5.9534C546.725 33.2762 584.762 77.0855 591.348 123.63C598.526 174.361 595.765 241.772 522.716 264.181C448.465 286.959 380.817 315.263 298.222 317.687C205.735 320.4 133.287 305.354 51.6539 278.001C-23.9717 252.662 -3.19374 173.187 29.8498 123.63Z" fill="#AAF015"/>
                  </svg>
              </div>

          </div>
           
         
            <img loading='lazy' className='h-[45%] lg:h-[70%]  top-[30%] lg:top-[25%] right-[5%] lg:right-[25%] z-10 ' src="/Assets for Swiftpocket/mockups/landing3.png" alt="" />
            
            <img loading='lazy' className='h-[45%] lg:h-[70%]  top-[30%] lg:top-[25%] left-[30%] md:left-[35%] lg:left-[20%] z-10' src="/Assets for Swiftpocket/mockups/landing4.png" alt="" />
        </div>

        <div className='sm:w-[50%] sm:h-[50%] h-[20%] pl-10 sm:pl-20 flex justify-start items-center mb-[20%]'>
            <div className='flex flex-col items-start justify-center md:w-[100%] lg:w-[70%] w-[68%] '>
        
                <h1 className='font-bold md:text-[20px] lg:text-[30px] font-interHead sm:leading-[50px] '>Make POS payments with your Smart Phone</h1>
                <p className='sm:w-[85%] leading-8'>You just have to place your phone near the POS reader and put in your password of Face ID to complete paymnet. Transaction History is also available.</p>
            </div>


        </div>



    </div>
  )
}

export default POS