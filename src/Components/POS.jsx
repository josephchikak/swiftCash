import React from 'react'

const POS = () => {
  return (
    <div id='POS' className='h-[70vh] md:h-[60vh] lg:h-[70vh] w-screen flex flex-col sm:flex-row '>
        <div className='w-[60vw] sm:w-[50vw] h-[50%] relative '>
            <div className='w-[194px] h-[318px] lg:w-[594px] sm:h-[318px] md:w-[394px] selection absolute top-[50%] left-[20%] lg:top-[90%] lg:left-[15%] sm:left-[20%] md:left-[10%] md:top-[85%]'>
                 <svg width="" height="" viewBox="0 0 594 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" clipRule="evenodd" d="M29.8498 123.63C55.9306 84.5152 120.19 75.6152 173.384 49.3957C214.095 29.3289 256.461 58.701 306.097 49.3957C368.97 37.609 432.938 -18.0736 486.18 5.9534C546.725 33.2762 584.762 77.0855 591.348 123.63C598.526 174.361 595.765 241.772 522.716 264.181C448.465 286.959 380.817 315.263 298.222 317.687C205.735 320.4 133.287 305.354 51.6539 278.001C-23.9717 252.662 -3.19374 173.187 29.8498 123.63Z" fill="#AAF015"/>
                 </svg>
            </div>
            <img className='absolute w-[700px] top-[10%] lg:top-[20%] right-[5%] lg:right-[25%] ' src="/Assets for Swiftpocket/mockups/landing3.png" alt="" />
            <img className='absolute w-[700px] top-[10%] lg:top-[20%] left-[30%] md:left-[25%]' src="/Assets for Swiftpocket/mockups/landing4.png" alt="" />
        </div>

        <div className='sm:w-[50%] h-[80%] pl-10 flex justify-start items-center'>
            <div className='flex flex-col items-start justify-center w-[68%] '>
        
                <h1 className='font-bold sm:text-[30px] font-interHead sm:leading-[50px] '>Make POS payments with your Smart Phone</h1>
                <p className='sm:w-[85%] leading-8'>You just have to place your phone near the POS reader and put in your password of Face ID to complete paymnet. Transaction History is also available.</p>
            </div>


        </div>



    </div>
  )
}

export default POS