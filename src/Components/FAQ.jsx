import React, {useState} from 'react'
import '../style.css'

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'HOW DO I MAKE PAYMENTS USING SWIFTCASH',
            answer:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
            open: false,
        },
        {
            question: 'HOW DO I MAKE PAYMENTS USING SWIFTCASH',
            answer:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
            open: false,
        },
        {
            question: 'HOW DO I MAKE PAYMENTS USING SWIFTCASH',
            answer:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
            open: false,
        },
        {
            question: 'HOW DO I MAKE PAYMENTS USING SWIFTCASH',
            answer:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
            open: false,
        },
        {
            question: 'HOW DO I MAKE PAYMENTS USING SWIFTCASH',
            answer:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
            open: false,
        },
    ])

    const toggleOpen = (index) =>{
        setFaqs(faqs.map((faq, i) => {
           if (i === index) {faq.open = !faq.open }
           else {faq.open = false} 
           
           return faq
           
        }))
    }

 

  return (
    <div id='faq' className='w-screen h-full flex items-center justify-start pt-20 pb-20 flex-col'>
        <h1 className='text-center font-interHead text-[30px] p-10 font-bold'>Frequently Asked Questions</h1>
        <div id='faqs' className=' w-[80%] h-[full] flex flex-col gap-[20px] sm:text-[90%] text-[80%] '>
                {faqs.map((faq, i) => (
                    <div key={i} className='h-[100%] flex flex-col items-center gap-[10px] cursor-pointer'> 
                        <div className={`h-[60px] sm:h-[70px] w-[100%] rounded-[10px] border flex justify-between items-center pl-10 pr-10 ${faq.open ? 'bg-[color:var(--secondary-color)] text-white': 'bg-white'}`} onClick={ () => toggleOpen(i)}>
                            {faq.question}
                            <div id='iconDown' className={`${faq.open ? 'rotate-180 color-white' : '' }`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1204_14022)">
                                        <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
                                        <path d="M18.5 9L12.5 15L6.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1204_14022">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                </svg>
                            </div>
                        </div>
                       
                         <div className={`p-[20px] w-[95%] ${faq.open ? 'flex' : 'hidden'} answer`}>
                            {faq.answer}
                          </div>
                         
                  
                      
                        

                    </div>
                   
                    
                ))}

        </div>

    
    </div>

  )
}

export default FAQ