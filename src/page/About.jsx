import React from 'react'
import { Scan } from 'lucide-react'

export default function About() {
  return (
    <>
        <div className=' bg-[url(assets/richie.png)] h-[90vh] bg-contain bg-no-repeat bg-right bg-black'>
            <div className='text-[#c4c1c1] px-28 py-7' style={{fontFamily:'Bricolage Grotesque Variable'}}>
                <div className=''>
                    <h1 className='text-5xl uppercase mt-9 font-extrabold underline underline-offset-9 decoration-[#5076a7]'>About</h1>
                    <p className='mt-3'>harbdulsalamrasheed33@gmail.com</p>
                </div>
                <div className='w-[40%] mt-13'>
                    <p>I’m a passionate web developer who enjoys creating clean, responsive, and user-friendly websites and web applications. I focus on turning ideas into functional digital experiences using modern web technologies. With a strong eye for detail and a problem-solving mindset, I aim to build interfaces that are both visually appealing and easy to use. I enjoy working with tools like HTML, CSS, JavaScript, and modern frameworks, and I’m constantly learning to improve my skills. I value clean code, good design, and performance, and I’m always excited to take on new challenges and grow as a developer.</p>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className=' mt-12 w-[37%] items-center'>
                        <h1 className='text-center'>Ibadan, Oyo State.</h1>
                        <div className='flex items-center gap-3 '>
                            <span className='flex-1 h-px bg-[#5076a7]'></span>
                            <span>Balogun Str. Opposite Akinyele L.G.C</span>
                            <span className='flex-1 h-px bg-[#5076a7]'></span>
                        </div>
                    </div>
                    <div>
                        <Scan />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
