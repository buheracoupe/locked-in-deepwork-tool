import React from 'react'
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "./Footer"
import { useSelector } from 'react-redux';


const faqArray = [
    {id:1,
     question: "What is Locked-In?",
     answer: "Locked-In is a Deep Work Timer app. Locked-In refers to a state of optimal focus and productivity. When you're Locked-In, you're fully immersed in your task, free from distractions, and experiencing a heightened sense of concentration. This state allows you to achieve maximum efficiency and effectiveness in your work.",
    },
    {id:2,
     question: "What is Deep Work?",
     answer: "Deep work is a productivity technique that involves focusing on a single, demanding task without distractions. It's about entering a state of flow where you're fully immersed in your work, achieving a higher level of concentration and productivity.",
    },
    {id:3,
     question: "Why is Deep Work Important?",
     answer: "Deep work, as eloquently articulated by Cal Newport in his seminal work 'Deep Work,' is an indispensable tool for cultivating a productive and fulfilling life. By immersing oneself in a state of focused concentration, free from distractions, we tap into our cognitive potential, unlocking creativity, problem-solving abilities, and a heightened sense of accomplishment",
     showing:false
     },
    {id:4,
     question: "How Does Neuroscience Explain the Benefits of Deep Work?",
     answer: "Neuroscience research has shown that deep work activates specific areas of the brain, including the prefrontal cortex, which is responsible for executive functions like decision-making, planning, and problem-solving. When you engage in deep work, you're essentially strengthening these neural connections, leading to improved cognitive abilities.",
     },
    {id:5,
     question: "How Does This Deep Work Timer Help?",
     answer: "Our Deep Work Timer is designed to enhance your productivity and focus by providing a structured framework for uninterrupted work sessions. By setting a specific duration for your deep work intervals, you can create a sense of urgency that motivates you to stay focused and avoid distractions. The timer's visual countdown serves as a constant reminder of your goal, helping you stay on track and minimize interruptions. ",
     },
     {id:6,
     question: "Can I Use Locked-In for Other Activities Besides Deep Work?",
     answer: "Absolutely! This timer can be used for any activity that requires deep concentration, such as studying, practicing a skill, or creative pursuits.",
     },
]

function FaqSection() {
  const [faqs, setFaqs] = useState(faqArray);
  const [activeQuestion, setActiveQuestion] = useState({question: "", showing: false})
  const simplePage = useSelector((state)=> state.simplePage.simplePage)
  
      return (
      <div id='faqSection' className={!simplePage ? 'h-lvh flex flex-col justify-between' : "hidden"}>
        <div className="faq-container mx-auto w-[400px] md:w-[auto] max-w-[700px] p-8 mt-6 rounded-lg shadow-lg bg-white">
          <p className='text-4xl font-semibold mb-8 text-center text-secondaryDark'>Frequently Asked Questions</p>
          <div className='flex flex-col gap-3'>{
            faqs.map((faq) => {
              return(
                <div 
                 onClick={
                  () => {
                    activeQuestion.question === faq.id ?
                     setActiveQuestion({...activeQuestion, showing:!activeQuestion.showing}) :
                     setActiveQuestion({ question: faq.id, showing: true})  
                    console.log(activeQuestion)
                  }
                 }
                 key={faq.id}
                 className="flex flex-col w-[300px] md:w-[600px] mx-auto border-b-2 border-b-primaryDark last:border-b-0 p-3  gap-4">
                  <div className='flex gap-2  justify-between items-center'>
                  <p className='font-semibold text-primaryDark text-lg'>{faq.question}</p>
                  { activeQuestion.question === faq.id && activeQuestion.showing ?
                  <IoIosArrowUp className='text-secondaryDark text-2xl bg-primaryLight p-1 rounded-full' />:
                  <IoIosArrowDown className='text-secondaryDark text-2xl bg-primaryLight p-1 rounded-full' />
                }
                  </div>
                  <AnimatePresence >
                  { activeQuestion.showing && activeQuestion.question === faq.id &&
                  <motion.div
                    initial = {{opacity: 0, height: 0}}
                    animate={{opacity:1, height: "auto"}}
                    exit={{opacity: 0, height: 0}} >
                  <p>{faq.answer}</p>
                  </motion.div>}
                  </AnimatePresence>
                 
                </div>
              )
            })
            }
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default FaqSection